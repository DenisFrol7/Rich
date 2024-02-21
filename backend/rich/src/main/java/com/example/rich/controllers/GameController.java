package com.example.rich.controllers;

import com.example.rich.models.Game;
import com.example.rich.services.GameServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/game")
public class GameController {
    private final GameServices gameServices;

    @GetMapping
    public List<Game> getGames() {
        return gameServices.gameList();
    }

    @PostMapping
    public ResponseEntity<HttpStatus> addGame(@RequestBody Game game) {
        gameServices.save(game);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
