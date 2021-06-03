package com.damaprodutora.DsCatalog.architecture;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.lang.ArchRule;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.classes;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;
import static com.tngtech.archunit.library.Architectures.layeredArchitecture;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LayersTests {
	
	private JavaClasses classes;
	
	@BeforeEach
	void setUp() throws Exception {
		
		classes = new ClassFileImporter().importPackages("com.damaprodutora.DsCatalog");
	}
	
	@Test
    public void serviceShouldOnlyBeAccessedByResource() {
		
        ArchRule rule = classes()
        	    .that().resideInAPackage("..services..")
        	    .should().onlyBeAccessed().byAnyPackage("..resources..", "..services..");
    
        rule.check(classes);
    }
	
	@Test
    public void repositoryShouldOnlyBeAccessedByService() {
		
        ArchRule rule = classes()
        	    .that().resideInAPackage("..repositories..")
        	    .should().onlyBeAccessed().byAnyPackage("..services..", "..repositories..");
    
        rule.check(classes);
    }
	
	@Test
    public void entityShouldNotBeAccessedByResource() {
		
        ArchRule rule = noClasses().that().resideInAPackage("..entities..")
        	    .should().dependOnClassesThat().resideInAPackage("..resources..");
    
        rule.check(classes);
    }
	
	@Test
    public void layerDependenciesAreRespected() {
        layeredArchitecture()

                .layer("Controllers").definedBy("..resources..")
                .layer("Services").definedBy("..services..")
                .layer("Persistence").definedBy("..repositories..")

                .whereLayer("Controllers").mayNotBeAccessedByAnyLayer()
                .whereLayer("Services").mayOnlyBeAccessedByLayers("Controllers")
                .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Services")

                .check(classes);
    }
}
