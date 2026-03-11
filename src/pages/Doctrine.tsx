import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import PageHero from '../components/PageHero';

const articles = [
  { id: 1, title: 'Das Escrituras', content: 'Cremos que a Bíblia Sagrada foi escrita por homens, sobrenaturalmente inspirados por Deus e que é a verdade sem qualquer erro em seu conteúdo. E, portanto, é, e permanecerá até o fim dos séculos como a única revelação completa e final de Deus ao homem; o verdadeiro centro de união cristã e o padrão supremo pelo qual toda a conduta humana, credos e opiniões deverão ser aferidos. Por Bíblia Sagrada queremos dizer aquela coleção de sessenta e seis livros, de Gênesis a Apocalipse, a qual, originalmente escrita, é a própria Palavra de Deus verbal e plenária.' },
  { id: 2, title: 'Do Verdadeiro Deus', content: 'Cremos que há um só Deus, vivo e verdadeiro; um Espírito inteligente, Criador e supremo governador do céu e da terra; expressivamente glorioso em santidade, digno de toda honra, confiança e amor; que na unidade Divina há três pessoas, Pai, Filho e Espírito Santo, iguais em toda perfeição divina e execução de ofícios distintos, mas harmoniosos na grande obra da redenção.' },
  { id: 3, title: 'Do Espírito Santo', content: 'Cremos que o Espírito Santo é uma pessoa divina; igual a Deus o Pai, e a Deus o Filho, e da mesma natureza. Cremos que Ele restringe a maldade até que se cumpra o propósito de Deus; que Ele convence do pecado, do juízo e da justiça; que Ele dá testemunho do verdadeiro Evangelho, na pregação e na confirmação; que Ele é o agente do Novo Nascimento; que Ele sela, dota, guia, ensina, testifica, santifica, consola e auxilia o crente.' },
  { id: 4, title: 'Do Diabo, ou Satanás', content: 'Cremos que Satanás foi uma vez santo e desfrutou das honras celestiais, mas, por causa do orgulho e da ambição de ser como o Todo Poderoso, caiu e arrastou uma hoste de anjos; é agora o príncipe maligno do poder do ar e o deus ímpio deste mundo. Sustentamos ser ele o grande tentador do homem, o inimigo de Deus e do Seu Cristo, o acusador dos santos, o autor de todas as religiões falsas, o poder principal por detrás da presente apostasia.' },
  { id: 5, title: 'Da Criação', content: 'Cremos no relato da criação que se encontra no livro de Gênesis e que deve ser aceito literalmente, e não alegórica ou figuradamente; que a criação do homem não foi matéria da evolução ou mudança evolutiva das espécies; que toda a vida animal e vegetal foi criada diretamente e operou segundo a lei de Deus de que se reproduziriam "conforme a sua espécie".' },
  { id: 6, title: 'Da Queda do Homem', content: 'Cremos que o homem foi criado em inocência, sob a lei do seu Criador, mas por transgressões voluntárias caiu do seu estado perfeito e feliz, em consequência do que, toda a espécie humana é agora pecadora, de natureza decaída, não por escolha, portanto, sob justa condenação sem defesa ou desculpa.' },
  { id: 7, title: 'Do Nascimento Virginal', content: 'Cremos que Jesus Cristo foi gerado do Espírito Santo, de uma maneira milagrosa; nascido de Maria, uma virgem, como nenhum homem jamais nasceu de mulher, e que Ele tanto é o Filho de Deus como é Filho do homem.' },
  { id: 8, title: 'Do Sacrifício Pelo Pecado', content: 'Cremos que a Salvação dos pecadores é inteiramente pela graça; através dos ofícios mediatórios do Filho de Deus, o qual, pela indicação do Pai, tomou livremente sobre ele nossa natureza, todavia sem pecado, honrou a lei divina pela Sua obediência e por Sua morte fez pelos nossos pecados um sacrifício completo.' },
  { id: 9, title: 'Da Graça Na Nova Criação', content: 'Cremos que, para serem salvos, os pecadores devem nascer de novo. O novo nascimento é uma nova criação em Cristo Jesus; que é instantâneo e não um processo; que no novo nascimento o morto em delitos e pecados é feito participante da natureza divina e recebe a compreensão, unicamente pelo poder do Espírito Santo.' },
  { id: 10, title: 'Da Gratuidade Da Salvação', content: 'Cremos que a salvação é pela graça, um dom gratuito de Deus; que as bênçãos da salvação são oferecidas a todos, pelo evangelho. É dever imediato de todos aceitá-la, por meio da fé e arrependimento sincero.' },
  { id: 11, title: 'Justificação', content: 'Cremos que a grande benção do evangelho, é que Cristo garante aos que nEle creem, a justificação; que inclui o perdão do pecado e o dom da vida eterna; que é dispensada não em consideração a quaisquer obras de justiça que houvéssemos feito, senão unicamente por meio da fé no sangue Redentor.' },
  { id: 12, title: 'Do Arrependimento e Da Fé', content: 'Cremos que o arrependimento e a fé são graças inseparáveis, operadas em nossas almas pela vivificação do Espírito de Deus, pelo qual, sendo convencidos de nossas culpas, perigo e desamparo, voltando-nos para Deus em sincera contrição, confissão e súplica por misericórdia.' },
  { id: 13, title: 'Da Igreja', content: 'Cremos que a Igreja de Cristo é uma congregação de crentes batizados num concerto de fé e comunhão do evangelho, observando as ordenanças de Cristo, governada por suas leis, exercendo os dons, direitos e privilégios pela sua palavra. Sustentamos que a igreja local tem o direito absoluto de autogoverno, livre da interferência de qualquer hierarquia.' },
  { id: 14, title: 'Do Batismo e da Ceia do Senhor', content: 'Cremos que o batismo cristão é a imersão de um crente na água, em nome do Pai, do Filho e do Espírito Santo, com a autoridade da Igreja local. A Ceia do Senhor é o uso sagrado do pão e do fruto da vide, em memória de Cristo, precedido sempre de solene autoexame.' },
  { id: 15, title: 'Da Perseverança dos Santos', content: 'Cremos que só os salvos permanecerão até o fim, que sua adesão perseverante a Cristo é a grande marca que os distingue de professantes superficiais; que são guardados pelo poder de Deus através da fé para a eterna salvação.' },
  { id: 16, title: 'Dos Justos e Dos Ímpios', content: 'Cremos que há uma diferença radical e essencial entre os justos e os ímpios, que só são verdadeiramente justos na estima de Cristo os que são justificados pela fé no nome do Senhor Jesus e santificados pelo Espírito de Deus.' },
  { id: 17, title: 'Do Governo Civil', content: 'Cremos que o Governo Civil é de nomeação Divina, para os interesses e boa ordem da sociedade humana; que os magistrados devem ser alvos de nossas orações, honrados e obedecidos conscientemente, exceto nas coisas opostas à vontade de nosso Senhor Jesus Cristo.' },
  { id: 18, title: 'Da Ressurreição e Eventos Relacionados', content: 'Cremos que Cristo ressuscitou corporalmente ao terceiro dia; que Ele ascendeu à mão direita do trono de Deus; cremos no arrebatamento dos santos, na Grande Tribulação, no Reino Milenar de Cristo na terra e no julgamento final.' },
  { id: 19, title: 'Da Evangelização e Missões', content: 'O mandamento de levar o Evangelho ao mundo é claro e inconfundível, e esta Comissão foi dada à Igreja (Mt. 28.18-20; Mc. 16.15).' },
  { id: 20, title: 'Da Graça de Dar', content: 'O dar, segundo as Escrituras, é um dos fundamentos da fé. Somos ordenados a trazer os dízimos e ofertas à casa do tesouro. Sob a graça devolvemos e não pagamos o dízimo.' },
  { id: 21, title: 'Da Separação', content: 'Cremos que devemos nos separar do liberalismo teológico, do mundanismo (práticas e locais impróprios), da imoralidade sexual, de sociedades secretas e de seitas que contrariam o ensinamento bíblico.' },
  { id: 22, title: 'Da Não Participação', content: 'Cremos que não devemos trabalhar em união ou participar nos movimentos carismáticos, pentecostais, neopentecostais e no movimento ecumênico.' },
  { id: 23, title: 'Do Ministério Pastoral', content: 'Cremos que não é bíblica a ordenação feminina para o ministério pastoral ou diaconal, nem a ordenação de divorciados e recasados para o ministério pastoral.' },
  { id: 24, title: 'Da Liturgia', content: 'Nossos cultos devem observar o princípio de ordem e decência. Não usamos ritmos mundanos na música (rock, samba, funk, etc) nem danças e coreografias. Recomendamos o Hinário Batista e o Cantor Cristão.' },
  { id: 25, title: 'Da Vestimenta', content: 'Orientamos pela modéstia e decência no vestir, tanto dentro quanto fora da igreja, evitando roupas sensuais ou que exponham o corpo. Defendemos a diferenciação clara entre os sexos.' },
  { id: 26, title: 'Das Versões da Bíblia', content: 'Recomendamos apenas o uso de traduções bíblicas baseadas no texto Massorético (VT) e Receptus (NT), traduzidas por equivalência formal.' },
  { id: 27, title: 'Da Metodologia Ministerial', content: 'Cada igreja local tem liberdade de usar ferramentas de ensino e evangelização bíblicas, evitando vinculações com movimentos como G-12 e M-12.' },
  { id: 28, title: 'Aborto e Eutanásia', content: 'Cremos que a vida é um dom de Deus e cabe somente a Ele o poder de tomá-la, sendo contrários a tais práticas.' },
  { id: 29, title: 'Homossexualismo', content: 'Cremos que a prática do homossexualismo é abominável diante de Deus. Não discriminamos as pessoas, mas condenamos tais práticas à luz da Bíblia.' },
];

export default function Doctrine() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="pt-20">
      <PageHero 
        title="No Que Cremos" 
        subtitle="Nossa declaração de fé fundamentada exclusivamente nas Escrituras Sagradas."
        image="https://picsum.photos/seed/bible/1920/1080"
        alt="Bíblia Sagrada aberta, simbolizando a base doutrinária e a verdade sem erro da Igreja Batista Bíblica."
      />
      
      <div className="max-w-4xl mx-auto py-24 px-6">

        <div className="space-y-4 mb-16">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border border-stone-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenId(openId === article.id ? null : article.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-serif text-xl font-bold">
                  <span className="text-brand-primary mr-4 opacity-50">{String(article.id).padStart(2, '0')}</span>
                  {article.title}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-stone-400 transition-transform duration-300 ${openId === article.id ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openId === article.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-stone-600 leading-relaxed">
                      {article.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <div className="p-8 bg-stone-100 rounded-2xl text-center italic text-stone-500">
            Estes são os principais pontos de nossa declaração de fé, composta por 29 artigos detalhados.
          </div>
        </div>

        <div className="text-center">
          <button className="bg-brand-primary text-white px-10 py-4 rounded-full inline-flex items-center gap-3 hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/20">
            <Download size={20} />
            Baixar Declaração de Fé Completa (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
