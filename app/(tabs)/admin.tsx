import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function AdminScreen() {
  return (
    <View className='items-center'>
      <View className='bg-blue-900' lightColor="#eee" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
