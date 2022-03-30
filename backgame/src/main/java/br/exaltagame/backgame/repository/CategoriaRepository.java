package br.exaltagame.backgame.repository;

import org.springframework.stereotype.Repository;

import br.exaltagame.backgame.entity.Categoria;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}