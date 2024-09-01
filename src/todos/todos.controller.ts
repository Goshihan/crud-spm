/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dtos/create-todo.dto';


@Controller('todos')
export class TodosController{
    constructor(private readonly TtodoService:TodosService){}
@Post()
    create(@Body() dto:CreateTodoDto){
        return this.TtodoService.create(dto);
    }

    @Get()
    findMany(){
        return this.TtodoService.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number ,@Body() dto:CreateTodoDto){
        return this.TtodoService.update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number ){
        return this.TtodoService.delete(id);
    }
}