# Vue - The Complete Guide

- [Section 2: Basics & Core Concepts - DOM Interaction with Vue](#Section-2:-Basics-&-Core-Concepts)
- [Section 3: Rendering Conditional Content & Lists](#Section-3:-Rendering Conditional-Content-&-Lists)
- [Section 8: Component Communication](#Section-8:-Component-Communication)
- [Section 9: Diving Deeper into Components](#Section-9:-Diving-Deeper-into Components)

## Section 2: Basics & Core Concepts - DOM Interaction with Vue
1. DOM & Templates
    * Vue can be used to define the goal instead of the steps (**declarative** approach).
    * **Connect** Vue to HTML via "**mount**": Vue **then renders the real DOM** based on the connected template.

1. Data & Event Bindings
    * You can **bind data** via interpolation (**{{ }}**) or the **v-bind** (":") directive.
    * You **listen for events** via **v-on** ("@").

1. Reactivity
    * Vue updates the real DOM for you when bound data changes.
    * **Computed properties** and **watchers** allow you to react to data changes.

1. Styling
    * Dynamic CSS class and inline style bindings are supported by Vue.
    * Vue offers multiple **special syntaxes** (object-based, array-based) for efficient bindings.

## Section 3: Rendering Conditional Content & Lists
1. Conditional Content
    * **v-if** (and **v-show**) allows you to render content **only if a certain condition is met**.
    * v-if can be combined with **v-else** and **v-else-if** (only on direct sibling elements!).

1. Lists
    * v-for can be used to render multiple elements dynamically.
    * v-for can be used with arrays, objects, and ranges (numbers).

1. v-for Variations
    * You can extract **values**, values and **indexes**, or values, **keys**, and indexes.
    * If you need v-for and v-if, **DON'T use them on the same element**. Use a wrapper with v-if instead.

1. Keys
    * Vue **re-uses DOM elements** to optimize performance. This can lead to bugs if elements contain state.
    * Bind the **key** attribute to a unique value to help Vue identify elements that belong to list content.

## Section 8: Component Communication
1. Component Communication Overview
    * Components are used to build UIs by **combining** them.
    * Components build "**parent-child**" relations and use "**unidirectional** data flows" for communication.

1. Props (parent => child)
    * "**Props**" are used to **pass data from a parent to a child** component.
    * Props should be **defined in advance**, possibly in great detail (type, required etc.).

1. Custom Events (child => parent)
    * "**Custom Events**" are **emitted** (via **$emit**) to trigger a method in a parent component.
    * Custom events can **carry data** which can be used in the called method.

1. Provide-Inject
    * If data needs to be passed **across multiple components** ("pass through"), you can use **provide/inject**.
    * **Provide data in a parent** component, **inject it into a child** component.

## Section 9: Diving Deeper into Components
1. Component Registration & Styles
    * Components can be registered **globally or locally: Prefer local** registration.
    * Styles can be **global or scoped** to a component: **Prefer scoped** for most components.

1. Slots
    * **Slots** can be used to add a "**placeholder**" for dynamic HTML code.
    * **Multiple, named slots** are possible, **default fallbacks** can be provided. **Scoped slots** allow adv. use-cases.

1. Dynamic Components
    * Components can be **swapped dynamically** via the built-in "component" component.
    * Component caching can be added via the "keep-alive" component.

1. Teleport & Style Guide
    * **DOM structure can be manipulated** via "teleport" - it **keeps the component hierarchy!**
    * **Consider following the official style guide** to keep your code clean and understandable.
