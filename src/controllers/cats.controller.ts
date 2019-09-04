import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatDto as Cat } from '../dto/cat.dto';
import { CatService } from '../services/cat.service';
import { response, responseError } from '../helpers/response.helper';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }

  @Post()
  create(@Body() cat: Cat) {

    try {
      this.catService.create(cat);
      return response('Success', this.catService.findAll());
    } catch (e) {
      return responseError(e.message);
    }
  }

}
