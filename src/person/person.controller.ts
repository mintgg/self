import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return createPersonDto;
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: string) {
    return {
      name,
      age,
    };
  }

  @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }
  param(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
