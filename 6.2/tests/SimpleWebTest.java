import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SimpleWebTest {
    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\Users\manas\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe"); // Update the path
        driver = new ChromeDriver();
    }

    @Test
    public void testHomePage() {
        driver.get("http://localhost:8080"); // URL to your local test server
        String title = driver.getTitle();
        Assert.assertEquals("Expected Title", title); // Change "Expected Title" to the actual title
    }

    @After
    public void tearDown() {
        driver.quit();
    }
}
