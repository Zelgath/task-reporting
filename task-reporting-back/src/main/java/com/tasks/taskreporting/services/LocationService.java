package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Location;
import com.tasks.taskreporting.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;


    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public Location getLocationById(Long locationId) throws ChangeSetPersister.NotFoundException {
        return locationRepository.findById(locationId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
    }

    public Location createLocation(Location location) {
        return locationRepository.save(location);
    }

    public Location updateLocation(Long locationId, Location locationDetails) throws ChangeSetPersister.NotFoundException {
        Location location = locationRepository.findById(locationId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        location.setDescription(locationDetails.getDescription());
        location.setCity(locationDetails.getCity());
        location.setStreet(locationDetails.getStreet());
        location.setPostal(locationDetails.getPostal());
        location.setCountry(locationDetails.getCountry());
        final Location updatedLocation = locationRepository.save(location);
        return updatedLocation;
    }

    public Map<String, Boolean> deleteLocation(Long locationId) throws Exception {
        Location location = locationRepository.findById(locationId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        locationRepository.delete(location);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
