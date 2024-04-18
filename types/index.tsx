//Definição dos tipos de dados utilizados no aplicativo.
//Usamos interface pois eventualmente podemos querer adicionar mais campos a cada tipo

export interface Task {
  name: string;
  createdAt: string;
  isFinished: boolean;
}

// Aqui definimos as propriedades esperadas para cada componente

export interface TaskDetailsProps {
  route: {
    params: {
      task: Task;
    };
  };
}

export interface HomeScreenProps {
  navigation: {
    navigate: (screen: string, params: { task: Task }) => void;
  };
}
