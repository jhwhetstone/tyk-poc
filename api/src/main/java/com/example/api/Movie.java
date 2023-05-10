package com.example.api;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Movie {
    private String title;
    private int id;
}
