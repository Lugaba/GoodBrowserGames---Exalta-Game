package br.exaltagame.backgame.repository;

import org.springframework.stereotype.Repository;

import br.exaltagame.backgame.entity.BrowserGame;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BrowserGameRepository extends JpaRepository<BrowserGame, Long> {

}