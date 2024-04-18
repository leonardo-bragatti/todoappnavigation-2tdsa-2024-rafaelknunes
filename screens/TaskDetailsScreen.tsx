import React from 'react';
import { View, Text } from 'react-native';

// Define o componente TaskDetailsScreen usando TypeScript para tipagem das props
const TaskDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  // Extrai a tarefa passada como parâmetro através da navegação
  const { task } = route.params;
  // Converte a string de data armazenada em um objeto Date para usar métodos de data
  const createdAtDate = new Date(task.createdAt);

  // Renderiza o componente na tela
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nome da Tarefa: {task.name}</Text> 
      <Text>Data Criação: {createdAtDate.toLocaleDateString('pt-BR')}</Text>
      <Text>Status da Tarefa: {task.isFinished ? 'Concluída' : 'Não Concluída'}</Text> 
    </View>
  );
};

export default TaskDetailsScreen; // Exporta o TaskDetailsScreen para uso em outros locais do aplicativo
