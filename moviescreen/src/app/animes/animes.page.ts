import { Component, OnInit } from '@angular/core';
import { Serie } from "src/modelos/serie";

@Component({
  selector: 'app-animes',
  templateUrl: './animes.page.html',
  styleUrls: ['./animes.page.scss'],
})
export class AnimesPage implements OnInit {

  animes: Serie[];

  constructor() {

    this.animes = [
      {nome:"Attack on Titan", genero:" Ação, Fantasia sombria, Ficção pós-apocalíptica", ano:"2013", capa:"../../assets/img/capas/animes/aot.jpeg", temporadas:"3", sinopse:"Eren Yeager precisa salvar a humanidade quando os titãs aparecerem e devoram carne humana."},
      {nome:"Boku no Hero Academia", genero:"Ficção de aventura, Fantasia, História de super-herói, Comédia, Ficção científica", ano:"2014", capa:"../../assets/img/capas/animes/boku.jpeg", temporadas:"5", sinopse:"Boku no Hero Academia, também conhecido como My Hero Academia no ocidente, é uma série de mangá escrita e ilustrada por Kōhei Horikoshi. Os capítulos do mangá são publicados na revista Weekly Shōnen Jump desde julho de 2014, sendo compilados em volumes formato tankōbon pela editora Shueisha."},
      {nome:"Death Note", genero:"Ação, Fantasia sombria,", ano:"2006", capa:"../../assets/img/capas/animes/death_note.jpeg", temporadas:"1", sinopse:"Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas. Sob a influência de Ruyk, dono do caderno, ele passa a usá-lo para eliminar criminosos e pessoas que escaparam da justiça. A súbita onda de assassinatos faz com que ele seja endeusado por muitos, que o apelidam de Kira, mas também atrai a atenção de um enigmático e brilhante detetive, chamado L."},
      {nome:"Dragon Ball GT", genero:"Ação, Fantasia", ano:"1996", capa:"../../assets/img/capas/animes/DragonBall_GT.jpeg ", temporadas:"3", sinopse:"Conheça a história dez anos depois do fim de Dragon Ball Z. Son Goku é transformado numa criança de 10 anos de idade."},
      {nome:"Fullmetal Alchemist: Brotherhood", genero:"Mistério, Suspense psicológico, Suspense", ano:"2009", capa:"../../assets/img/capas/animes/full.jpeg ", temporadas:"2", sinopse:"Os irmãos Edward e Alphonse Elric seguem em busca da pedra Filosofal, com a esperança de restaurar seus corpos que foram perdidos quando eles tentaram usar suas habilidades de alquimista para ressuscitar sua mãe. "},
      {nome:"Naruto", genero:"Ficção de aventura, Fantasia, Artes marciais", ano:"2002", capa:"../../assets/img/capas/animes/naruto_classico.jpeg ", temporadas:"9", sinopse:"Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila. ... Agora Naruto vai contar com a ajuda dos colegas Sakura e Sasuke e do professor dos três, Kakashi Hatake, para perseguir seu sonho e deter os ninjas que planejam fazer mal á sua cidade."},
      {nome:"Naruto Shippuden", genero:"Ficção de aventura, Fantasia, Artes marciais", ano:"2007", capa:"../../assets/img/capas/animes/shippuden.png ", temporadas:"21", sinopse:"Naruto Shippuden foi exibido entre os anos de 2007 e 2017 e contando a segunda fase do anime. Nela, Naruto retorna após dois anos de treinamento com a missão de combater a Akatsuki e então resgatar Sasuke das garras de Orochimaru. ... Além disso, o anime preparao terreno para a continuação direta da história."},
      {nome:"One Piece", genero:"Ficção de aventura, Fantasia", ano:"1997", capa:"../../assets/img/capas/animes/onepiece.jpeg ", temporadas:"15", sinopse:"One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e publicados em 96 volumes tankōbon pela editora Shueisha até abril de 2020. One Piece conta as aventuras de Monkey D."},
      {nome:"One Punch-Man", genero:"Ficção de aventura, Fantasia", ano:"2009", capa:"../../assets/img/capas/animes/saitama.jpeg", temporadas:"3", sinopse:"One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno."},
      {nome:"Pokémon", genero:"Ação, Fantasia", ano:"1997", capa:"../../assets/img/capas/animes/pokemon.jpeg ", temporadas:"23", sinopse:" Ash Ketchum é um garoto que sonha se tornar um mestre Pokémon e, ao lado de seu fiel escudeiro Pikachu, desbrava lugares peculiares, encara desafios e faz novos amigos em busca de seu objetivo."}
    ]


  }

  ngOnInit() {
  }

}
