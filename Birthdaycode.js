function calculateAge(birthDateInput) {
    const birthDate = new Date(birthDateInput);
    const currentDate = new Date();

    
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    
    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += previousMonth.getDate();
    }

    
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    
    console.log(`You have lived ${years} years, ${months} months, and ${days} days.`);
}

const birthDate = "2005-01-20";  // < put your birthdate in const birthDate = "year - month - day" I have no reason why it is in US template so don't ask!
calculateAge(birthDate);