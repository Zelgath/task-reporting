package com.tasks.taskreporting.utils;

import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;

@Component
public class DateFormatterForAngularMaterial {

    public DateFormatterForAngularMaterial() {
    }

    public String changeData(String inputData) {
        String output = inputData.substring(0, 10);
        return output;
    }
}
