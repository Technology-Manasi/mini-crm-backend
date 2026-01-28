import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly service: TasksService) {}

  // ================= CREATE TASK =================
  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  // ================= GET TASKS =================
  @Get()
  findAll(@Req() req: any) {
    return this.service.findAll(req.user);
  }

  // ================= UPDATE TASK STATUS =================
  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateTaskStatusDto,
    @Req() req: any,
  ) {
    return this.service.updateStatus(
      Number(id),
      dto,          // ✅ FULL DTO pass
      req.user,
    );
  }
}
