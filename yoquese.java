Public class Matriz { // Matriz completa
 public static void main(String[] args) { 
    int[][] matriz = // {elementos, en, la, fila} 
    {                                             // Matriz Impresa:
    {1,2,3}, // Fila numero 1                     // 1   2   3
    {4,5,6}, // fila numero 2                     // 4   5   6
    {7,8,9}, // fila numero 3                     // 7   8   9  
    {0,0,0}  // fila numero 4                     // 0   0   0 
    };                             
    // Imprimir la matriz para ser mostrada
  System.out.println("Matriz Impresa:");
        for (int i = 0; i < matriz.length; i++) { // Recorre las filas una a una sacando elementos
            for (int j = 0; j < matriz[i].length; j++) { // Recorre las columnas igual que en filas
                System.out.print(matriz[i][j] + "\t"); // Imprime con tabulación para estar organizado
            }
            System.out.println();
      }
   }
}
   