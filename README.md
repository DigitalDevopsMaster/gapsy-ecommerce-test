# gapsy-ecommerce-test

Para poder probar la app, hay que ingresar a la raiz y ejecutar el comando npm run dev



-



Patrones utilizados:

Patrón Aplicado en HOME: Container Component

Descripción: Este patrón se utiliza para definir componentes que solo se encargan de la lógica y el layout, sin involucrar detalles de presentación específicos. El componente Home actúa como un contenedor que maneja la lógica de recuperación de datos y el estado de carga, y luego pasa los datos y las funciones necesarias a componentes de presentación como Header y ProductList.

Patrón Aplicado en COMPONENTES: Presentational Component
ste patrón se refiere a componentes que están principalmente enfocados en cómo se ven. Los componentes de presentación (o "dumb components") se encargan de la representación visual de la UI, mientras que la lógica de estado y la lógica de negocio se manejan en componentes contenedores o en un nivel superior.