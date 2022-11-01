import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseoptions, fetchRapidAPIData, youtubeoptions } from '../ApiCall/fetchDataAPI';
import Information from '../Component/Information';
import Videos from '../Component/Videos';
import Similar from '../Component/Similar';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchRapidAPIData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseoptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchRapidAPIData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeoptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchRapidAPIData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseoptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchRapidAPIData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseoptions);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Information exerciseDetail={exerciseDetail} />
    </Box>
  );
};

export default ExerciseDetails;