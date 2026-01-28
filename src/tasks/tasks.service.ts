import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Role } from '../common/enums/role.enum';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // ================= CREATE TASK =================
  async create(dto: CreateTaskDto) {
    // ✅ check assigned employee
    const user = await this.prisma.user.findUnique({
      where: { id: dto.assignedToId },
    });

    if (!user || user.role !== Role.EMPLOYEE) {
      throw new NotFoundException('Assigned employee not found');
    }

    // ✅ check customer
    const customer = await this.prisma.customer.findUnique({
      where: { id: dto.customerId },
    });

    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    // ✅ create task
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        assignedToId: dto.assignedToId,
        customerId: dto.customerId,
      },
    });
  }

  // ================= GET TASKS =================
  async findAll(user: { userId: number; role: Role }) {
    const where =
      user.role === Role.ADMIN
        ? {}
        : { assignedToId: user.userId };

    return this.prisma.task.findMany({
      where,
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        customer: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
      },
    });
  }

  // ================= UPDATE TASK STATUS =================
  async updateStatus(
    id: number,
    dto: UpdateTaskStatusDto,
    user: { userId: number; role: Role },
  ) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    // ✅ employee can update only own task
    if (
      user.role === Role.EMPLOYEE &&
      task.assignedToId !== user.userId
    ) {
      throw new ForbiddenException('You cannot update this task');
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        status: dto.status,
      },
    });
  }
}
