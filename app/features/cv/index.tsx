import { useState } from 'react'
import type { ExperienceAPIInterface } from './Experience'
import { Experience } from './Experience'
import type { FormationAPIInterface } from './Formation'
import { Formation } from './Formation'
import Contact from '~/components/Contact'
import CVContainer from './CVContainer'
import Accordion from '~/components/Accordion'

import bisectArray from '~/utils/bisectArray'

import './CV.css'

export interface ExperienceElementInterface {
    content: string
    , title: string
    , company: string
    , period: string
    , location: string
    , collection: {
      status: boolean
      , position: string
    }
}

function prepareListExperiences(
  experiences: ExperienceAPIInterface[]
): ExperienceElementInterface[] {
  return experiences.map(experience => ({
    content: experience.content.rendered
    , title: experience.title.rendered
    , company: experience.custom_fields.company
    , period: experience.custom_fields.period
    , location: experience.custom_fields.location
    , collection: {
      status: false
      , position: ''
    }
  }))
}

function setCollection(experiences: ExperienceElementInterface[]) {
  let previousExperience: ExperienceElementInterface = {
    content: ''
    , title: ''
    , company: ''
    , period: ''
    , location: ''
    , collection: {
      status: false
      , position: ''
    }
  }

  let collectionIndex = 0

  return experiences.map(experience => {
    const {company}                  = experience
    const {company: previousCompany} = previousExperience

    if (company === previousCompany) {
      collectionIndex++
      experience.collection =
        previousExperience.collection = {
          status: true
          , position: collectionIndex === 1 ? 'first' : ''
        }
    }

    return previousExperience = experience
  })
}

function Experiences(props: {
  list: ExperienceAPIInterface[]
}) {
  const [xpShowAll, setXPShowAll] = useState(false)
  const experiences = setCollection(prepareListExperiences(props.list))

  const [
    experiencesToShow,
    experiencesToHide
  ] = bisectArray(experiences, 8)

  const handleXPShowAll = () => setXPShowAll(!xpShowAll)

  return (
    <>
      <h2>💻Expériences</h2>
      {experiencesToShow.map((
        xp: ExperienceElementInterface
      ) => {
        return <Experience
          title={xp.title}
          content={xp.content}
          company={xp.company}
          location={xp.location}
          period={xp.period}
          collection={xp.collection}
          key={xp.period}
        />
      })}

      <Accordion
        handleOpen={handleXPShowAll}
        open={xpShowAll}
        titleToShow="Afficher plus d’expériences"
        titleToHide="Masquer quelques expériences"
      >
        {experiencesToHide.map((
          xp: ExperienceElementInterface
        ) => {
          return <Experience
            title={xp.title}
            content={xp.content}
            company={xp.company}
            location={xp.location}
            period={xp.period}
            collection={xp.collection}
            key={xp.period}
          />
        })}
      </Accordion>
    </>
  )
}

function Formations(props: {
  list: FormationAPIInterface[]
}) {
  const [formationShowAll, setFormationShowAll] = useState(false)
  const formations = props.list

  const [
    formationsToShow,
    formationsToHide
  ] = bisectArray(formations, 4)

  const handleFormationShowAll = () => setFormationShowAll(!formationShowAll)

  return (
    <>
      <h2>🎓 Formations</h2>
      {formationsToShow.map((formation: any) => {
        return <Formation
          title={formation.title.rendered}
          content={formation.content.rendered}
          school={formation.custom_fields.school}
          location={formation.custom_fields.location}
          year={formation.custom_fields.year}
          key={formation.title.rendered}
        />
      })}

      <Accordion
        handleOpen={handleFormationShowAll}
        open={formationShowAll}
        titleToShow="Afficher plus de formations"
        titleToHide="Masquer quelques formations"
      >
        {formationsToHide.map((formation: any) => {
          return <Formation
            title={formation.title.rendered}
            content={formation.content.rendered}
            school={formation.custom_fields.school}
            location={formation.custom_fields.location}
            year={formation.custom_fields.year}
            key={formation.title.rendered}
          />
        })}
      </Accordion>
    </>
  )
}

export default function CV(props: {
  experiences: ExperienceAPIInterface[]
  , formations: FormationAPIInterface[]
}) {
  return <CVContainer>
    <>
      <Experiences list={props.experiences} />
      <Formations list={props.formations}/>
      <div className="big-row contact">
        <div>
          <h3>Vous recherchez un développeur ?</h3>
          <p>
            Actuellement en recherche active
            d'une entreprise contribuant au bien commun
          </p>
          <h1>Contactez moi</h1>
          <Contact />
        </div>
      </div>
    </>
  </CVContainer>
}
