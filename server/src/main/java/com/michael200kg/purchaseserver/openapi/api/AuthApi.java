/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (4.2.2).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package com.michael200kg.purchaseserver.openapi.api;

import com.michael200kg.purchaseserver.openapi.dto.User;
import com.michael200kg.purchaseserver.openapi.dto.UserAuth;
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
@Api(value = "Auth", description = "the Auth API")
public interface AuthApi {

    default Optional<NativeWebRequest> getRequest() {
        return Optional.empty();
    }

    @ApiOperation(value = "Logs user into the system via username amd password", nickname = "loginUser", notes = "", response = User.class, tags={ "Auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Received logged in user", response = User.class) })
    @RequestMapping(value = "/auth/login",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    default ResponseEntity<User> loginUser(@ApiParam(value = "The user object for login"  )  @Valid @RequestBody UserAuth userAuth) {
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


    @ApiOperation(value = "Logs out currently logged in user session", nickname = "logoutUser", notes = "", tags={ "Auth", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "Ok response. You are now logged out") })
    @RequestMapping(value = "/auth/logout",
        method = RequestMethod.GET)
    default ResponseEntity<Void> logoutUser() {
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);

    }

}
