/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PhotoService } from "../photo.service";
import { PhotoCreateInput } from "./PhotoCreateInput";
import { Photo } from "./Photo";
import { PhotoFindManyArgs } from "./PhotoFindManyArgs";
import { PhotoWhereUniqueInput } from "./PhotoWhereUniqueInput";
import { PhotoUpdateInput } from "./PhotoUpdateInput";

export class PhotoControllerBase {
  constructor(protected readonly service: PhotoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Photo })
  async createPhoto(@common.Body() data: PhotoCreateInput): Promise<Photo> {
    return await this.service.createPhoto({
      data: {
        ...data,

        inspection: data.inspection
          ? {
              connect: data.inspection,
            }
          : undefined,
      },
      select: {
        caption: true,
        cause: true,
        createdAt: true,
        dimensions: true,
        id: true,

        inspection: {
          select: {
            id: true,
          },
        },

        location: true,
        observation: true,
        otherRemarks: true,
        remedialMeasure: true,
        serialNumber: true,
        severity: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Photo] })
  @ApiNestedQuery(PhotoFindManyArgs)
  async photos(@common.Req() request: Request): Promise<Photo[]> {
    const args = plainToClass(PhotoFindManyArgs, request.query);
    return this.service.photos({
      ...args,
      select: {
        caption: true,
        cause: true,
        createdAt: true,
        dimensions: true,
        id: true,

        inspection: {
          select: {
            id: true,
          },
        },

        location: true,
        observation: true,
        otherRemarks: true,
        remedialMeasure: true,
        serialNumber: true,
        severity: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Photo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async photo(
    @common.Param() params: PhotoWhereUniqueInput
  ): Promise<Photo | null> {
    const result = await this.service.photo({
      where: params,
      select: {
        caption: true,
        cause: true,
        createdAt: true,
        dimensions: true,
        id: true,

        inspection: {
          select: {
            id: true,
          },
        },

        location: true,
        observation: true,
        otherRemarks: true,
        remedialMeasure: true,
        serialNumber: true,
        severity: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Photo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePhoto(
    @common.Param() params: PhotoWhereUniqueInput,
    @common.Body() data: PhotoUpdateInput
  ): Promise<Photo | null> {
    try {
      return await this.service.updatePhoto({
        where: params,
        data: {
          ...data,

          inspection: data.inspection
            ? {
                connect: data.inspection,
              }
            : undefined,
        },
        select: {
          caption: true,
          cause: true,
          createdAt: true,
          dimensions: true,
          id: true,

          inspection: {
            select: {
              id: true,
            },
          },

          location: true,
          observation: true,
          otherRemarks: true,
          remedialMeasure: true,
          serialNumber: true,
          severity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Photo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePhoto(
    @common.Param() params: PhotoWhereUniqueInput
  ): Promise<Photo | null> {
    try {
      return await this.service.deletePhoto({
        where: params,
        select: {
          caption: true,
          cause: true,
          createdAt: true,
          dimensions: true,
          id: true,

          inspection: {
            select: {
              id: true,
            },
          },

          location: true,
          observation: true,
          otherRemarks: true,
          remedialMeasure: true,
          serialNumber: true,
          severity: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
