# 📌 Hcho solo por Nestor Enrique Juarro Quintanilla

# 📌 Gestión de Servicios Técnicos

## 🧩 Situación Problemática

En muchos talleres de reparación de computadoras y técnicos independientes, el registro de servicios se realiza manualmente en cuadernos o archivos físicos. 

Esto provoca:
- Pérdida de información.
- Dificultad para calcular totales por cliente.
- Errores en los registros.
- Desorden administrativo.

## 💡 Solución Propuesta

Se desarrolló una aplicación web que permite:

- Registrar nombre del cliente.
- Seleccionar tipo de servicio.
- Ingresar costo del servicio.
- Calcular el total acumulado por cliente.
- Mostrar resultados en pantalla sin recargar la página.

## 🎯 Sectores Enfocados

- Talleres de reparación de computadoras.
- Técnicos independientes.
- Pequeñas y medianas empresas (PYMES).
- Centros educativos con laboratorio de informática.

---

# ⚙️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- WebComponents (Custom Elements + Shadow DOM)

---

# ❓ Preguntas

## ✅ ¿Qué valor agregado tiene el uso de WebComponents en el proyecto?

El uso de WebComponents permite encapsular la estructura, el estilo y la lógica dentro de un componente reutilizable. Esto mejora la organización del código, facilita el mantenimiento y permite escalar el sistema en el futuro sin afectar otras partes de la aplicación.

Además, al utilizar Shadow DOM, se evita que los estilos externos interfieran con el componente, garantizando mayor modularidad.

---

## ✅ ¿De qué forma manipularon los datos sin recargar la página?

Se utilizó el evento `submit` del formulario y el método `event.preventDefault()` para evitar la recarga automática de la página.

Luego se manipuló dinámicamente el DOM utilizando JavaScript para:
- Agregar nuevos servicios.
- Agrupar servicios por cliente.
- Calcular el total por cliente.
- Mostrar los resultados en pantalla en tiempo real.

---

## ✅ ¿De qué forma validaron las entradas de datos?

Las validaciones implementadas fueron:

- Verificación de que el nombre del cliente no esté vacío.
- Verificación de que el tipo de servicio sea seleccionado.
- Verificación de que el costo sea un número válido.
- Validación de que el costo sea mayor que cero.

Si alguna validación falla, se muestra un mensaje de alerta y el sistema no permite guardar el registro.

---

## ✅ ¿Cómo manejaría la escalabilidad futura en su página?

Para permitir crecimiento futuro del sistema se podría:

- Implementar almacenamiento con LocalStorage o una base de datos.
- Separar la lógica en módulos JavaScript.
- Implementar un backend con Node.js y Express.
- Agregar autenticación de usuarios.
- Implementar arquitectura cliente-servidor.
- Migrar a un framework moderno como React o Vue para aplicaciones más grandes.

---

# 🚀 Conclusión

Este proyecto demuestra el uso práctico de JavaScript en el desarrollo FrontEnd mediante la implementación de eventos, manipulación del DOM y WebComponents, resolviendo una problemática real del sector técnico-informático.
