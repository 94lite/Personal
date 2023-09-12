"use client";

import {
  SiPython, SiJavascript, SiHtml5, SiCss3,
  SiFlask, SiReact, SiNextdotjs,
  SiMicrosoftsqlserver, SiOracle, SiPostgresql, SiSqlite,
  SiDocker, SiKubernetes, SiAmazonaws,
  SiAnsible, SiPuppet,
  SiGit, SiGitlab, SiBitbucket, SiGithub,
  SiVisualstudiocode, SiJira, SiConfluence, SiTrello,
  SiRedis, SiNginx, SiWebpack
} from "react-icons/si";

const TechStack = props => {
  return (
    <div className="tech-stack-page">
      <TechStackSection name="Languages">
        <Labelled label="Python">
          <SiPython />
        </Labelled>
        <Labelled label="Javascript">
          <SiJavascript />
        </Labelled>
        <Labelled label="HTML">
          <SiHtml5 />
        </Labelled>
        <Labelled label="CSS">
          <SiCss3 />
        </Labelled>
      </TechStackSection>
      <TechStackSection name={<div>Libraries<br/>+ Frameworks</div>}>
        <Labelled label="Flask">
          <SiFlask />
        </Labelled>
        <Labelled label="React">
          <SiReact />
        </Labelled>
        <Labelled label="Next.js">
          <SiNextdotjs />
        </Labelled>
      </TechStackSection>
      <TechStackSection name="Databases">
        <Labelled label="SQL Server">
          <SiMicrosoftsqlserver />
        </Labelled>
        <Labelled label="Oracle DB">
          <SiOracle />
        </Labelled>
        <Labelled label="PostgreSQL">
          <SiPostgresql />
        </Labelled>
        <Labelled label="SQLite">
          <SiSqlite />
        </Labelled>
      </TechStackSection>
      <TechStackSection name={<div>Deployment<br/>+ Automation</div>}>
        <Labelled label="Docker">
          <SiDocker />
        </Labelled>
        <Labelled label="Kubernetes">
          <SiKubernetes />
        </Labelled>
        <Labelled label="AWS">
          <SiAmazonaws />
        </Labelled>
        <Labelled label="Ansible">
          <SiAnsible />
        </Labelled>
      </TechStackSection>
      <TechStackSection name="Version Control">
        <Labelled label="Git CLI">
          <SiGit />
        </Labelled>
        <Labelled label="Gitlab">
          <SiGitlab />
        </Labelled>
        <Labelled label="Bitbucket">
          <SiBitbucket />
        </Labelled>
        <Labelled label="Github">
          <SiGithub />
        </Labelled>
      </TechStackSection>
      <TechStackSection name="Software">
        <Labelled label="VS Code">
          <SiVisualstudiocode />
        </Labelled>
        <Labelled label="Jira">
          <SiJira />
        </Labelled>
        <Labelled label="Confluence">
          <SiConfluence />
        </Labelled>
        <Labelled label="Trello">
          <SiTrello />
        </Labelled>
      </TechStackSection>
    </div>
  )
};

const TechStackSection = props => {
  const { name, children } = props;

  return (
    <div className="tech-stack-section">
      <div className="tech-stack-name">
        {name}
      </div>
      <div className="tech-stack-list">
        {children}
      </div>
    </div>
  )
};

const Labelled = props => {
  const { label, children } = props;
  
  return (
    <div className="tech-stack-tech">
      <div className="tech-icon">{children}</div>
      <div className="tech-label">{label}</div>
    </div>
  )
};

export default TechStack;