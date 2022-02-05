pipeline{
    environment {
        imagename = "saifromdhane/solarenergy_back"
        registryCredential = "dockerhub_credentials"
        // dockerImage = ''
        // scannerHome = tool 'sonarQube scanner'
        def scannerHome = tool 'sonarqube-scanner'

    }
    agent any
    stages{
        stage("build"){
            
            steps{
                sh 'npm install'
                sh 'docker --version'
            }
        }
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                    sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=solarenergy-backend \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=admin \
                        -Dsonar.password=trythisagain96"
                    } 
           }
                // withSonarQubeEnv("sonarQube") {
                // sh "${scannerHome}/bin/sonar-scanner"
                //     sh "${tool("sonarqube")}/bin/sonar-scanner \
                //     -Dsonar.projectKey=solarenergy-backend \
                //     -Dsonar.sources=. \
                //     -Dsonar.css.node=. \
                //     -Dsonar.host.url=https://sonarqube.projectcloud.click/ \
                //     -Dsonar.login=admin \
                //     -Dsonar.password=admin"
                // }
                    
            }
        }
        // stage("docker-build"){
        //     steps{
        //         script {
        //             dockerImage = docker.build imagename   
        //             docker.withRegistry( '', registryCredential ) {
        //             dockerImage.push("$BUILD_NUMBER")
        //             dockerImage.push('latest')
        //             }
        //         }
        //     }
        // }
        // stage("deploy"){
        //     steps{
        //         echo 'deployment'
        //     }
        // }
    }
}