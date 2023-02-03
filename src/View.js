// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'Elbrus';
    console.clear();
    console.log('🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲');
    console.log('\n');
    console.log(track.join(''));
    console.log('\n');
    console.log('🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲🌳🌴🌲');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
