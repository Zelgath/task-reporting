package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Job;
import com.tasks.taskreporting.domain.Location;
import com.tasks.taskreporting.services.JobService;
import com.tasks.taskreporting.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class LocationController {

    @Autowired
    private LocationService locationService;


    @GetMapping("/locations")
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }

    @GetMapping("/locations/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable(value = "id") Long locationId) throws ChangeSetPersister.NotFoundException {
        Location location = locationService.getLocationById(locationId);
        return ResponseEntity.ok().body(location);
    }

    @PostMapping("/locations")
    public Location createLocation(@Valid @RequestBody Location location) {
        return locationService.createLocation(location);
    }

    @PutMapping("/locations/{id}")
    public ResponseEntity<Location> updateLocation(@PathVariable(value = "id") Long locationId, @Valid @RequestBody Location locationDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(locationService.updateLocation(locationId, locationDetails));
    }

    @DeleteMapping("/locations/{id}")
    public Map<String, Boolean> deleteLocation(@PathVariable(value = "id") Long locationId) throws Exception {
        return locationService.deleteLocation(locationId);
    }

}
