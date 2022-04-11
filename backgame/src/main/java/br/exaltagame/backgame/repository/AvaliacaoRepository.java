package br.exaltagame.backgame.repository;

import org.springframework.stereotype.Repository;

import br.exaltagame.backgame.entity.Avaliacao;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {

}