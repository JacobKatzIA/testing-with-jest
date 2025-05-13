const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
    let stack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Bananer");
        await alert.accept();
    });
});

// Browser test som är tänkt att misslyckas (då elementet med id="encourage-message" inte är tillagt i mitt html-dokument).
test('Should show the user a message to encourage them to add an element to the stack', async () => {
    // Försök att hitta elementet med ID encourage-message.
    let encourageMessage = await driver.findElement(By.id('encourage-message'));
    // Verifiera att elementet innehåller följande text "please add an element to the stack!".
    let text = await encourageMessage.getText();
    expect(text).toEqual("Please add an element to the stack!");
},  defaultTimeout);