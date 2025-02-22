import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsSevice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsSevice.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });

    return this.carsSevice.findOneById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  uptadeCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any) 
    {
        return body;
    }
  
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
        method: 'Delete',
        id
    }
  }

  
}
