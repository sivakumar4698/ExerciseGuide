import React, { useState } from 'react';
import Banner from '../Component/Banner'
import Exercises from '../Component/Exercises'
import Search from '../Component/Search'

const LandingPage = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (

    <div>
    <Banner />
    <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  )
}

export default LandingPage