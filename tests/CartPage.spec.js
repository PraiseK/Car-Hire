import { shallowMount } from '@vue/test-utils';
import CartPage from '@/components/CartPage/CartPage.vue'; 

describe('CartPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CartPage, {
      data() {
        return {
          customerInfo: {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            phone: '',
          },
          verhicleSelected: {
            price: 100,
            imgDir: 'path/to/image.jpg',
            name: 'Vehicle Name',
            seats: 4,
            doors: 4,
            suitCases: 2,
            carType: 'Automatic',
            drivingAge: 25,
            location: 'Pickup Location',
          },
          hiringObject: {
            fromDate: '2023-01-01',
            toDate: '2023-01-10',
            hiringDuration: 9,
          },
        };
      },
    });
  });

  it('renders the cart page correctly', () => {
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('renders driver details form', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input[type="text"][v-model="customerInfo.firstName"]').exists()).toBe(true);
    expect(wrapper.find('input[type="text"][v-model="customerInfo.lastName"]').exists()).toBe(true);
    expect(wrapper.find('input[type="date"][v-model="customerInfo.dob"]').exists()).toBe(true);
    expect(wrapper.find('input[type="email"][v-model="customerInfo.email"]').exists()).toBe(true);
    expect(wrapper.find('input[type="text"][v-model="customerInfo.phone"]').exists()).toBe(true);
  });

  it('displays the correct vehicle review details', () => {
    expect(wrapper.find('.text-xl.font-bold').text()).toBe('Verhicle');
    expect(wrapper.find('img[alt="veh-review"]').attributes('src')).toBe('path/to/image.jpg');
  });

  it('calculates total price correctly', () => {
    const totalPrice = wrapper.vm.verhicleSelected.price * wrapper.vm.hiringObject.hiringDuration;
    expect(totalPrice).toBe(900);
  });
});


