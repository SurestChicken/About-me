import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/face.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tristen Foster</ThemedText>
      </ThemedView>
   
         <ThemedView style={styles.ThemedText}>
          My passtion is writing/journaling. I really like talking to people but i cant always talk, so an alternative is writing down my thoguhts instead of saying them. My role for SCLA is UX,UI designer, at first i was scared and i didnt want to be a UI,UX designer but after some videos i saw online it seems pretty intersesting to do and im kinda exited to start. I dont know what my dream career is but i would like to do somthing in the cartoon indesty or like filimng but i dont know yet.
         </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 290,
    width: 290,
    left: 24.5,
  },
  Cookie:{
    height: 120,
    color: 'white'
  }
});
