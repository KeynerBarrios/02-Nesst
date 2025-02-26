import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsSevice: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsSevice.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe ) id: string) {
    console.log({ id });

    return this.carsSevice.findOneById(id);
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.carsSevice.create(createCarDto);
  }

  @Patch(':id')
  uptadeCar(
    @Param('id', ParseUUIDPipe ) id: string,
    @Body() updateCarDto: UpdateCarDto) 
    {
        return this.carsSevice.update(id, updateCarDto);
    }
  
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe ) id: string) {
    return this.carsSevice.delete(id)
  }

  
}
