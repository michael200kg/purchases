/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (4.2.2).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.michael200kg.purchaseserver.openapi.api;

import com.michael200kg.purchaseserver.openapi.dto.PasswordUpdateHolder;
import com.michael200kg.purchaseserver.openapi.dto.User;
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
@Api(value = "User", description = "the User API")
public interface UserApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    @ApiOperation(value = "Create user", nickname = "createUser", notes = "", response = User.class, tags={ "User", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Edited Purchase", response = User.class) })
    @RequestMapping(value = "/user",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<User> createUser(@ApiParam(value = "User"  )  @Valid @RequestBody User user) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"apiKey\" : \"apiKey\", \"fio\" : \"fio\", \"username\" : \"username\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    @ApiOperation(value = "Get list of all Users", nickname = "getUsers", notes = "", response = User.class, responseContainer = "List", tags={ "User", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Retrieved list of all Purchases", response = User.class, responseContainer = "List") })
    @RequestMapping(value = "/user",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    default ResponseEntity<List<User>> getUsers() {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"apiKey\" : \"apiKey\", \"fio\" : \"fio\", \"username\" : \"username\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    @ApiOperation(value = "Update user password - disable with AD integration", nickname = "updatePassword", notes = "", tags={ "User", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Updated password") })
    @RequestMapping(value = "/user/password",
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<Void> updatePassword(@ApiParam(value = "" ,required=true )  @Valid @RequestBody PasswordUpdateHolder passwordUpdateHolder) {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }


    @ApiOperation(value = "Edit user", nickname = "updateUser", notes = "", response = User.class, tags={ "User", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Edited Purchase", response = User.class) })
    @RequestMapping(value = "/user",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    default ResponseEntity<User> updateUser(@ApiParam(value = "User"  )  @Valid @RequestBody User user) {
        getRequest().ifPresent(request -> {
            for (MediaType mediaType: MediaType.parseMediaTypes(request.getHeader("Accept"))) {
                if (mediaType.isCompatibleWith(MediaType.valueOf("application/json"))) {
                    String exampleString = "{ \"apiKey\" : \"apiKey\", \"fio\" : \"fio\", \"username\" : \"username\" }";
                    ApiUtil.setExampleResponse(request, "application/json", exampleString);
                    break;
                }
            }
        });
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}
