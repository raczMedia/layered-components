import { defineFeature, loadFeature } from "jest-cucumber";
import { mount } from "@vue/test-utils";
import NavBar from "./NavBar.vue";

const feature = loadFeature(
  "src/components/navigation/NavBar/NavBar.feature"
);

defineFeature(feature, (test) => {
  test("Rendering the NavBar", ({ given, then, and }) => {
    let wrapper;
    given("The app loads the NavBar page", () => {
      wrapper = mount(NavBar);
    });

    then("the NavBar shows", () => {
      expect(wrapper.find('[aria-label="NavBar"]').exists()).toBe(true);
    });


  });

  test('Rendering default slot', ({ given, then }) => {
    let wrapper;
    let slot = '<div aria-label="slot-override">Hello</div>';
    given('The navbar recieves a default slot', () => {
      wrapper = mount(NavBar, {
        slots: {
          default: slot,
        },
      });
    });

    then('the navbar overwrites the left and right sections with the slot content', () => {
        expect(wrapper.find('[aria-label="slot-override"]').exists()).toBe(
          true
        );
        expect(wrapper.find('[aria-label="NavBar"] > *').html()).toBe(slot);
    });
  });

  test('Rendering left slot', ({ given, then }) => {
    let wrapper;
    given('when I pass content to the left slot', () => {
      wrapper = mount(NavBar, {
        slots: {
          left: "<div aria-label='slot-override'>Hello</div>",
        },
      });
    });

    then('the content is inserted into the left section', () => {
      expect(wrapper.find('[aria-label="slot-override"]').exists()).toBe(true);
    });
  });

  test('Rendering right slot', ({ given, then }) => {
    let wrapper;
    given('when I pass content to the right slot', () => {
      wrapper = mount(NavBar, {
        slots: {
          right: "<div aria-label='slot-override'>Hello</div>",
        },
      });
    });

    then('the content is inserted into the right section', () => {
      expect(wrapper.find('[aria-label="slot-override"]').exists()).toBe(true);
    });
  });
})



