import styled from "styled-components";
import Title from "../Title/Index";

const LibraryContainer = styled.div`
  max-width: 1120px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin: 2rem 0;
`;


const Content = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: justify;
  margin-bottom: 1rem;
`;

const MainLibrary = () => {
  return (
    <LibraryContainer>
      <Title>Biblioteca de Conteúdo</Title>

      <Section>
        <Title>1. Fundamentos de Marketing Digital</Title>
        <Content>
          Aprenda como otimizar a presença online da sua empresa, usar redes
          sociais e criar estratégias eficazes de marketing digital para atrair
          e reter clientes. Explore guias e artigos que explicam conceitos como
          SEO, marketing de conteúdo, e-mail marketing, e publicidade paga.
        </Content>
      </Section>

      <Section>
        <Title>
          2. Planejamento Financeiro para Pequenas Empresas
        </Title>
        <Content>
          A sustentabilidade financeira é crucial para o sucesso de qualquer
          negócio. Aqui, você encontrará recursos que ajudam a organizar as
          finanças da sua empresa, criar planos de fluxo de caixa e utilizar
          ferramentas de gestão financeira.
        </Content>
      </Section>

      <Section>
        <Title>3. Automação de Marketing com IA</Title>
        <Content>
          Entenda como usar a inteligência artificial para automatizar suas
          campanhas de marketing, desde a segmentação do público até a criação
          de conteúdo personalizado. Conheça as melhores ferramentas e
          plataformas que podem facilitar esse processo.
        </Content>
      </Section>

      <Section>
        <Title>
          4. Ferramentas de Produtividade para Empreendedores
        </Title>
        <Content>
          Aqui estão listadas várias ferramentas e plataformas que podem
          melhorar sua produtividade e a gestão de tempo. Explore opções para
          gerenciamento de projetos, colaboração em equipe, e organização de
          tarefas.
        </Content>
      </Section>

      <Section>
        <Title>
          5. Histórias de Sucesso de Pequenos Empreendedores
        </Title>
        <Content>
          Inspire-se com histórias de pequenos empreendedores que superaram
          desafios usando estratégias financeiras e de marketing inovadoras.
          Saiba como eles transformaram suas ideias em negócios prósperos.
        </Content>
      </Section>

      <Section>
        <Title>6. Recursos e Guias Práticos</Title>
        <Content>
          Encontre tutoriais detalhados sobre como usar as principais
          ferramentas de marketing e gestão financeira. Guias passo a passo para
          configurar campanhas de marketing digital, utilizar sistemas de CRM, e
          muito mais.
        </Content>
      </Section>
    </LibraryContainer>
  );
};

export default MainLibrary;