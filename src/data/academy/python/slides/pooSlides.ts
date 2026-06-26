import type { Slide } from "../../types";

/** Unidad 2 — POO (PDF págs. 105–121). */
export const pooSlides: Slide[] = [
  {
    variant: "cover",
    eyebrow: "Unidad 2 · POO",
    title: "Programación Orientada a Objetos",
    subtitle: "Clases, objetos, atributos y métodos",
  },
  {
    variant: "content",
    title: "¿Qué es un objeto?",
    blocks: [
      {
        type: "paragraph",
        text: "Un objeto es una instancia de una clase: agrupa datos (atributos) y comportamientos (métodos) que operan sobre esos datos.",
      },
      {
        type: "callout",
        variant: "note",
        text: "Piensa en una clase como el molde y en el objeto como la pieza creada a partir de ese molde.",
      },
    ],
  },
  {
    variant: "content",
    title: "Clase y objeto — sintaxis",
    blocks: [
      {
        type: "code",
        language: "python",
        code: 'class Perro:\n    def __init__(self, nombre, raza):\n        self.nombre = nombre\n        self.raza = raza\n\n    def ladrar(self):\n        return f"{self.nombre} dice: ¡Guau!"\n\nmi_perro = Perro("Rocky", "Labrador")\nprint(mi_perro.ladrar())',
      },
    ],
  },
  {
    variant: "content",
    title: "__init__ y self",
    blocks: [
      {
        type: "list",
        style: "bullet",
        items: [
          "__init__: constructor; se ejecuta al crear el objeto.",
          "self: referencia a la instancia actual; permite acceder a atributos y métodos.",
          "Atributos de instancia: self.nombre, self.raza, etc.",
        ],
      },
    ],
  },
  {
    variant: "content",
    title: "Encapsulación y ejemplo práctico",
    blocks: [
      {
        type: "paragraph",
        text: "Modela entidades del mundo real: usuarios, productos, personajes de un juego. Cada objeto mantiene su estado y expone métodos para modificarlo de forma controlada.",
      },
      {
        type: "code",
        language: "python",
        code: "class CuentaBancaria:\n    def __init__(self, titular, saldo=0):\n        self.titular = titular\n        self.saldo = saldo\n\n    def depositar(self, monto):\n        self.saldo += monto\n\n    def retirar(self, monto):\n        if monto <= self.saldo:\n            self.saldo -= monto\n        return self.saldo",
      },
    ],
  },
  {
    variant: "practice",
    title: "Ejercicio — Personaje RPG",
    blocks: [
      {
        type: "paragraph",
        text: "Crea una clase Personaje con nombre, fuerza, defensa y vida. Incluye métodos atacar() y recibir_daño().",
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Define atributos en __init__",
          "atacar() devuelve el daño según fuerza",
          "recibir_daño() resta de vida respetando defensa",
          "Imprime el estado del personaje después de cada acción",
        ],
      },
    ],
  },
  {
    variant: "summary",
    title: "Resumen POO",
    blocks: [
      {
        type: "list",
        style: "check",
        items: [
          "class define el molde; el objeto es la instancia",
          "__init__ inicializa atributos",
          "self conecta métodos con la instancia",
          "POO organiza programas complejos en entidades",
        ],
      },
    ],
  },
];
