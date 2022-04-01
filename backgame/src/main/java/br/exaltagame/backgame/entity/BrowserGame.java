package br.exaltagame.backgame.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Lob;

@Entity
public class BrowserGame {
    @Id // chave primária
    @GeneratedValue(strategy = GenerationType.AUTO) // será gerado automaticamente
    private long id;

    @Column(nullable = false) // Atributo nao pode ser null
    private String nome;

    @Column(nullable = false)
    private String url;

    private String urlvideo;

    @Lob
    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String imagem;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getURL() {
        return this.url;
    }

    public void setURL(String url) {
        this.url = url;
    }

    public String getURLVideo() {
        return this.urlvideo;
    }

    public void setURLVideo(String urlvideo) {
        this.urlvideo = urlvideo;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return this.imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}