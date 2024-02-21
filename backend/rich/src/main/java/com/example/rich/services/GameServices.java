package com.example.rich.services;

import com.example.rich.models.Game;
import com.example.rich.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GameServices {
    private final GameRepository gameRepository;

    public List<Game> gameList() {
        return gameRepository.findAll();
    }

    public void save(Game game) {
        gameRepository.save(game);
    }

    public void delete(Game game) {
        gameRepository.delete(game);
    }
}
