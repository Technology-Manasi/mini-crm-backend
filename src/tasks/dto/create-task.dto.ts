import { IsEnum, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsInt()
  assignedToId: number;

  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
