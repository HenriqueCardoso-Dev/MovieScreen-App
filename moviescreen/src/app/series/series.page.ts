import { Component, OnInit } from '@angular/core';
import { Serie } from "src/modelos/serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  seriados: Serie[];

  constructor() {

    //adicionando Seriados:
    this.seriados = [
      {nome:"The Big Bang Theory", genero:"Comédia", ano:"2007", capa:"../../assets/img/capas/series/bigbang.jpeg", temporadas:"12 Temporadas", sinopse:"Leonard Hofstadter (Johnny Galecki) e Sheldon Cooper (Jim Parsons) são dois brilhantes físicos que dividem o mesmo apartamento. Suas vidas se complicam quando uma jovem linda, porém pouco inteligente, Penny (Kaley Cuoco), se muda para o apartamento da frente. A chegada de Penny perturbou um pouco Sheldon já que ele prefere passar as noites jogando Klingon Boggle com seus amigos e colegas de trabalho e também cientistas, Howard Wolowitz (Simon Helberg) e Rajesh 'Raj' Koothrappali (Kunal Nayyar), sem ligar para Penny. Contudo, Leonard vê em Penny a possibilidade de aprender a interagir com as mulheres e sente que ela é um novo mundo cheio de possibilidades, e quem sabe, do amor. Todos acham que isso é um sonho que nunca se realizará, porém, talvez nesta comédia estas mentes brilhantes possam aprender algumas coisas com uma jovem que trabalha em uma lanchonete chamada Cheesecake Factory. Se tornou famoso o bordão 'Bazinga!', usado por Sheldon quando alguém cai em uma piada sua, fazendo contraste com seu comportamento habitualmente racional."},
      {nome:"The Boys", genero:"Drama, Ficção científica, Ação", ano:"2019", capa:"../../assets/img/capas/series/boys.jpeg", temporadas:"2 Temporadas", sinopse:"Financiada pela CIA, a unidade conhecida como The Boys (ou Os Rapazes) é responsável manter os super-heróis na linha, por quaisquer meios possíveis. Os Rapazes são também supers, e criados a partir dos mais poderosos soros produzidos pelos EUA eles são capazes de dar conta de quase qualquer outro super-ser no mundo."},
      {nome:"Breaking Bad", genero:"Drama", ano:"2008", capa:"../../assets/img/capas/series/Breaking_Bad.png", temporadas:"5 Temporadas", sinopse:"Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis. White, então, é diagnosticado com um câncer no pulmão - o que o leva a sofrer um colapso emocional e abraçar uma vida de crimes para pagar suas dívidas hospitalares e dar uma boa vida aos seus filhos. Walter resolve produzir metanfetamina de alta pureza com seu ex-aluno, Jesse Pinkman."},
      {nome:"Todo Mundo Odeia o Chris", genero:"Comédia", ano:"2005", capa:"../../assets/img/capas/series/chris.jpeg", temporadas:"4 Temporadas", sinopse:"Baseada na vida do comediante Chris Rock, a série conta a história de Chris, um adolescente negro que vive com a família no bairro do Brooklyn, em Nova York, na década de 1980."},
      {nome:"Dark", genero:"Ficção científica", ano:"2017", capa:"../../assets/img/capas/series/Dark.jpeg", temporadas:"3 Temporadas", sinopse:"Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar."},
      {nome:"Narcos", genero:"Drama, Policial, Suspense, Biografia", ano:"2015", capa:"../../assets/img/capas/series/narcos.jpeg", temporadas:"3 Temporadas", sinopse:"Narcos é uma série de televisão norte-americana, de coprodução colombiana. A primeira temporada, composta por dez episódios, foi disponibilizada na plataforma de streaming Netflix desde 28 de agosto de 2015. Entre os principais artistas estão incluídos Wagner Moura, como o narcotraficante Pablo Escobar, Boyd Holbrook e Pedro Pascal no papel de agentes da DEA enviados dos Estados Unidos para sua captura. A segunda temporada, também composta por dez episódios, foi disponibilizada em 2 de setembro de 2016."},
      {nome:"Peaky Blinders", genero:"Drama, Histórico, Policial", ano:"2013", capa:"../../assets/img/capas/series/peaky_blinders.jpeg", temporadas:"5 Temporadas", sinopse:"Em Peaky Blinders, Thomas Shelby (Cillian Murphy) e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Shelby e os Peaky Blinders, a gangue na qual ele é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar."},
      {nome:"Stranger Things", genero:"Drama, Fantasia, Suspense", ano:"2016", capa:"../../assets/img/capas/series/strangeThings.jpeg", temporadas:"4 Temporadas", sinopse:"Em Stranger Things, quando Will (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo. Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo a experimentos secretos do governo e a uma peculiar menina perdida na floresta."},
      {nome:"The Fresh Prince of Bel-Air", genero:"Comédia", ano:"1990", capa:"../../assets/img/capas/series/thefreshprince.jpeg", temporadas:"6 Temporadas", sinopse:"A série conta a história de Will (Will Smith), um jovem de origem humilde que se muda para um luxuoso bairro na Califórnia. Após arrumar confusão com pessoas perigosas de seu bairro, na Filadélfia, a mãe de Will, temendo pelo futuro de seu filho, resolve mandá-lo para viver com sua irmã Vivian (Janet Hubert-Whitten) e seu cunhado Philip (James Avery), um advogado que se tornou juiz e tem uma vida muita bem sucedida. Contudo, por ser um garoto humilde e não ligar para os estudos, Will vive se comportando de maneira inadequada e provocando trapalhadas aos seus tios e primos na mansão."},
      {nome:"Vikings", genero:"Aventura, Drama, Histórico", ano:"2013", capa:"../../assets/img/capas/series/Vikings.jpeg", temporadas:"6 Temporadas", sinopse:"Vikings segue a vida de Ragnar Lothbrok (Travis Fimmel), o maior guerreiro da sua era. Lider de seu bando, com seus irmãos e sua família, ele ascende ao poder e torna-se Rei da tribo dos vikings. Além de guerreiro implacável, Ragnar segue as tradições nórdicas e é devoto dos deuses. As lendas contam que ele descende diretamente de Odin, o deus da guerra."}
    ]

   }

  ngOnInit() {
  }

}
