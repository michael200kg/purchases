/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (4.2.2).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.michael200kg.purchaseserver.openapi.api;

import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2021-01-08T01:41:58.754751300+03:00[Europe/Moscow]")

@Validated
@Api(value = "PurchaseItem", description = "the PurchaseItem API")
public interface PurchaseItemApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    @ApiOperation(value = "Toggle purchase item check", nickname = "togglePurchaseItem", notes = "", tags={ "Purchase Item", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Edited Purchase") })
    @RequestMapping(value = "/purchaseItem/toggle/{purchaseItemId}",
        method = RequestMethod.PUT)
    default ResponseEntity<Void> togglePurchaseItem(@ApiParam(value = "Id of the PurchaseItem",required=true) @PathVariable("purchaseItemId") Integer purchaseItemId) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}
