import './Skills.scss';
import React from "react";
import ItemSkill from "../components/ItemSkill";

const Skills = () => {
  return (
    <section className="skills">
      <h1 className="content-title content-title-tertiary">Skills</h1>
      <section className="listskills">
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' imageAlt='Java' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg' imageAlt='Kotlin' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain-wordmark.svg' imageAlt='Gradle' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg' imageAlt='Git' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg' imageAlt='Android' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg' imageAlt='Spring' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg' imageAlt='Kafka' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg' imageAlt='Docker' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg' imageAlt='Kubernetes' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' imageAlt='CSharp' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' imageAlt='Angular' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' imageAlt='Html5' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' imageAlt='Css3' />
        <ItemSkill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' imageAlt='JavaScript' />
      </section>
    </section>
  )
    ;
}
export default Skills;
