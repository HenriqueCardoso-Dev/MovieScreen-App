import { Component, OnInit } from '@angular/core';
import { Filme } from "src/modelos/filme";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  filmes: Filme[];

  constructor() { 
    this.filmes = [
      {nome:"Coringa", genero:"Drama", ano:"2019", capa:"../../assets/img/capas/movies/coringa.jpeg", duracao:"122min", sinopse:"Em Coringa, Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne (Brett Cullen) é seu maior representante."},
      {nome:"Fragmentado", genero:"Suspense, Fantasia, Terror", ano:"2017", capa:"../../assets/img/capas/movies/fragmentado.jpeg", duracao:"117min", sinopse:"Kevin (James McAvoy) possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar."},
      {nome:"Godzilla II: Rei Dos Monstros", genero:"Ação, Ficção científica, Thriller", ano:"2019", capa:"../../assets/img/capas/movies/godzilla.jpeg", duracao:"132min", sinopse:"Nesta continuação que se passa cinco anos após Godzilla (2014), os integrantes da agência Monarch precisam lidar com a súbita aparição de vários monstros, incluindo Mothra, Rodan e Ghidorah. Enquanto buscam uma aliança com o próprio Godzilla a fim de garantir o equilíbrio da Terra, os humanos acabam fazendo parte de uma grande disputa por poder protagonizada por titãs."},
      {nome:"The Godfather", genero:"Drama, Policial", ano:"1972", capa:"../../assets/img/capas/movies/poderoso.jpeg", duracao:"175min", sinopse:"Após negar proteção e ajuda financeira aos traficantes, um mafioso muito poderoso conta com a ajuda do filho, um herói de guerra, para proteger a família e o seu império."},
      {nome:"Psycho", genero:"Mistério, Terror", ano:"1960", capa:"../../assets/img/capas/movies/Psicose.jpeg", duracao:"109min", sinopse:"Refilmagem do clássico do terror. Mulher rouba 400 mil dólares de seu trabalho. Na fuga, se hospeda em um hotel de beira de estrada, cujo dono possui uma relação conturbada com a mãe."},
      {nome:"Ratatouille", genero:"Animação, Fantasia", ano:"2007", capa:"../../assets/img/capas/movies/Ratatouille.jpeg", duracao:"111min", sinopse:"Um rato chamado Remy sonha virar um grande chef francês apesar da objeção de sua família e dos problemas óbvios de ser um rato em um ambiente de trabalho em que eles não são nada bem-vindos. Remy se vê dividido entre sua paixão e a possibilidade de voltar à sua prévia e insignificante existência como um rato."},
      {nome:"Scarface", genero:"Drama, Crime", ano:"1983", capa:"../../assets/img/capas/movies/scarface.jpeg", duracao:"170min", sinopse:"A história começa com um prólogo histórico que nos situa na Cuba dos anos 80 onde centenas de cubanos fogem para os EUA. Dentre eles Antonio Montana um matador de aluguel que persegue incansavelmente o sonho americano escolhendo o caminho mais fácil: o da corrupção e a violência na opulenta Miami da era Reagan. Ele começa fazendo um ¿serviço¿ para um magnata do narcotráfico chamado Frank López e seu gênio e sua ânsia de poder fazem com que chegue logo ao topo do violento e corrupto império da droga. Mas tudo que sobe uma hora tem que descer e quanto mais alto maior o tombo."},
      {nome:"Thor: Ragnarok", genero:"Fantasia, Ficção científica", ano:"2017", capa:"../../assets/img/capas/movies/thor.png", duracao:"130min", sinopse:"Nesta sequência, Thor está em meio a uma disputa mortal contra seu antigo aliado, Hulk. Além de lutar pela própria vida, ele tem de impedir que a poderosa Hela destrua a civilização asgardiana."},
      {nome:"Toy Story 2", genero:"Animação, Fantasia", ano:"1999", capa:"../../assets/img/capas/movies/toy_story.jpeg", duracao:"92min", sinopse:"Enquanto Andy está em um acampamento, Woody é raptado por Al, um ambicioso colecionador. Antes que você possa dizer ¿ao infinito e além¿, Buzz Lightyear, Sr. Cabeça de Batata, Porquinho, Rex e Slinky entrarão em ação, em uma arriscada e hilária missão de resgate."},
      {nome:"Vingadores: Ultimato", genero:"Aventura, Ação", ano:"2019", capa:"../../assets/img/capas/movies/vingadores.jpeg", duracao:"181min", sinopse:"Vingadores: Ultimato é um filme de super-herói estadunidense de 2019, baseado na equipe Os Vingadores da Marvel Comics, produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures, sendo a sequência de Os Vingadores, de 2012, Vingadores: A era de Ultron, de 2015, e Vingadores: Guerra Infinita, de 2018, e o vigésimo segundo filme do Universo Cinematográfico Marvel. Dirigido por Anthony e Joe Russo e escrito por Christopher Markus e Stephen McFelly, o filme apresenta um ensemble cast que inclui Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Bradley Cooper e Josh Brolin. No filme, os membros sobreviventes dos Vingadores e seus aliados trabalham para reverter os danos causados por Thanos em Guerra Infinita."}
    ]
  }

  ngOnInit() {
  }

}
