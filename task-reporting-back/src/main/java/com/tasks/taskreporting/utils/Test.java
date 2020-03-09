package com.tasks.taskreporting.utils;


public class Test {
    public static void main(String[] args) {
        String input = "2020-03-04T23:00:00.000Z";
        DateFormatterForAngularMaterial changer = new DateFormatterForAngularMaterial();

        System.out.println(changer.changeData(input));
    }
}
