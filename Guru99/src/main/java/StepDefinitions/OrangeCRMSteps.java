package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrangeCRMSteps {
	WebDriver driver;

	@Given("Guru demo page")
	public void guru_demo_page() {
    
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\nitip\\Selenium jars and drivers\\drivers\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit. SECONDS);
}

	@Then("Click on Bank Project")
	public void click_on_Bank_Project() {
	driver.findElement(By.xpath("//a[normalize-space()='Bank Project']")). click();
}

	@Then("Click on Userid")
	public void click_on_Userid() {
    driver.findElement(By.xpath("//input[@name='uid']")). sendKeys("mngr308395");
	}
	
	@Then("Click on Password")
		public void click_on_Password() {
		driver.findElement(By.xpath("//input[@name='password']")). sendKeys("vUbedyv");
		} 

	@Then("Click on Login button")
		public void click_on_Login_button() {
		driver.findElement(By.xpath("//input[@name='btnLogin']")). click();
}

	@Then("validate the outcomes")
		public void validate_the_outcomes() {
		System.out.println("managerhomepage");
}

	
	

	@Given("click on New Customer")
	public void click_on_New_Customer() {
	driver.findElement(By.xpath("//a[normalize-space()='New Customer']")). click();
	}

	@Then("click on customer name")
	public void click_on_customer_name() {
	driver.findElement(By.xpath("//input[@name='name']")). sendKeys("Nitin Patil");
	}

	@Then("click on gender")
	public void click_on_gender() {
	driver.findElement(By.id("femaleradio")). click();
	}

	@Then("click on date of birth")
	public void click_on_date_of_birth() {
	driver.findElement(By.xpath("//input[@id='dob']")). sendKeys("2/15/2021");
	}

	@Then("click on address")
	public void click_on_address() {
	driver.findElement(By.xpath("//textarea[@name='addr']")). sendKeys("55 crent st");
	}

	@Then("click on city page")
	public void click_on_city_page() {
	driver.findElement(By.xpath("//input[@name='city']")). sendKeys("addision");
	}

	@Then("click on state page")
	public void click_on_state_page() {
	driver.findElement(By.xpath("//input[@name='state']")). sendKeys("IL");
	}

	@Then("click on PIN page")
	public void click_on_PIN_page() {
	driver.findElement(By.xpath("//input[@name='pinno']")). sendKeys("60101");
	}

	@Then("click on telephone number")
	public void click_on_telephone_number() {
	driver.findElement(By.xpath("//input[@name='telephoneno']")). sendKeys("222-101-2525");
	}

	@Then("click on Email")
	public void click_on_Email() {
	driver.findElement(By.xpath("//input[@name='emailid']")). sendKeys("niti.patel108@gmail.com");
	}

	@Then("click on submit")
	public void click_on_submit() {
	driver.findElement(By.xpath("//input[@name='sub']")).click();
	}

	@Then("validate the outcomes2")
	public void validate_the_outcomes2() {
	System.out.println("New customer page generated");

	}
}