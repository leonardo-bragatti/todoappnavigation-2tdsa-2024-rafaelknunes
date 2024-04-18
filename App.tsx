// Importa o React e os componentes necessários do React Native e React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Task } from './types'; // Importa a definição de tipo 'Task' definida em './types'
import HomeScreen from './screens/HomeScreen'; // Importa o componente HomeScreen
import TaskDetailsScreen from './screens/TaskDetailsScreen'; // Importa o componente TaskDetailsScreen

// Define a lista de rotas e os parâmetros esperados em cada tela
export type ListaDeRotas = {
  Home: undefined; // A Home não espera parâmetros
  TaskDetails: { task: Task }; // A página de TaskDetaisl espera um parâmetro 'task' do tipo Task
};

// Cria um objeto stack navigator usando os tipos definidos acima
const Stack = createNativeStackNavigator<ListaDeRotas>();

// Componente App principal que define a estrutura de navegação
// Inicia o contêiner de navegação
// Define a rota inicial sendo a Home e configura o navigator
const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen 
            name="Home" // Define a tela inicial
            component={HomeScreen} // Componente renderizado para a rota 'Home'
            options = {{ title: 'Lista de Tarefas' }} // Define o título da tela
        />
        <Stack.Screen
            name="TaskDetails" // Define a tela de detalhes da tarefa
             // Componente renderizado para a rota 'TaskDetails', 
            component={TaskDetailsScreen}
            options = {{ title: 'Detalhes da Tarefa' }} // Define o título da tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Exporta o componente App para uso em outros lugares do projeto
export default App;
