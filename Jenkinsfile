// ::DEFINE
def image_name          = "portal-peserta-web-frontend"
def service_name        = "portal-peserta-web-frontend"
def repo_name           = "prt/portal-peserta-web-frontend" 
def appName             = "portal-peserta-web-frontend"
def unitTest_standard   = "0.0%"
def sonarSrc            = "."
def sonarTest           = ""
def sonarCoverage       = "coverage.out"

// ::CLUSTER
def cluster_dev         = "https://10.0.0.2"
def cluster_staging     = "https://10.1.0.2"
def cluster_prod        = "https://10.2.0.2"
def credentials_dev     = "clusterdev"
def credentials_staging = "clusterstaging"
def credentials_prod    = "clusterprod"

// ::NOTIFICATION
def telegram_url        = "https://api.telegram.org/bot1294113089:AAGIfRq_iAKckaeRgRqXxPwfR3yFpVtEKUw/sendMessage"
def telegram_chatid     = "-376846743"
def job_success         = "SUCCESS"
def job_error           = "ERROR"

// ::URL
def repo_url            = "https://bitbucket.tapera.go.id/scm/${repo_name}.git"
def docker_dev          = "10.172.24.50:8082/docker-dev/portal-peserta"
def docker_staging      = "10.172.24.50:8083/docker-staging/portal-peserta"
def docker_prod         = "10.172.24.50:8084/docker-stable/portal-peserta"
def docker_credentials  = "ci-cd"
def helm_git            = "https://bitbucket.tapera.go.id/scm/dt/helm-portal-peserta.git"
def artifact_dev        = "https://nexus.tapera.go.id/repository/helm-test-portal-peserta"
def artifact_staging    = "https://nexus.tapera.go.id/repository/helm-incubator-portal-peserta"
def artifact_prod       = "https://nexus.tapera.go.id/repository/helm-stable-portal-peserta"
def nexusPluginsRepoUrl = "https://nexus.tapera.go.id/repository/maven-central/"
def nexusGoCentral      = "https://nexus.tapera.go.id/repository/go-central"
def k6_repo             = "https://bitbucket.tapera.go.id/scm/dt/k6-portal-peserta-event.git"
def katalonRepoUrl      = "https://bitbucket.tapera.go.id/scm/sam/katalon.git"
def host                = "hello.sotech.info"

// ::KATALON
def katalonProjectName  = "TestPlease.prj"
def katalonTestSuiteName= "TestSuiteTapera"

// ::INITIALIZATION
def fullname            = "${service_name}-${env.BUILD_NUMBER}"
def version, helm_dir, runPipeline, unitTest_score

environment {
    GO111MODULE = 'on'
}

node ('master') {
    try {
        // ::CHECKOUT
        stage ("Checkout") {
            // ::TRIGGER
            if (env.GET_TRIGGER == 'staging') {
                runPipeline = 'staging'
                runBranch   = "*/staging"
            } else if (env.GET_TRIGGER == 'production') {
                runPipeline = 'production'
                runBranch   = "*/tags/release-*"
            } else {
                runPipeline = 'dev'
                runBranch   = "*/${env.BRANCH_NAME}"
            }

            echo "With branch ${env.BRANCH_NAME}"

            // ::SOURCE CHECKOUT
            def scm = checkout([$class: 'GitSCM', branches: [[name: runBranch]], userRemoteConfigs: [[credentialsId: 'ci-cd', url: repo_url]]])

            // ::VERSIONING
            if (runPipeline == 'dev' && scm.GIT_BRANCH == 'origin/dev') {
                echo "Running DEV Pipeline with ${scm.GIT_BRANCH} branch"
                version             = "alpha"
                helm_dir            = "test"
                serverUrl           = "${cluster_dev}"
                docker_url          = "${docker_dev}"
                artifact_url        = "${artifact_dev}"
                credentialsCluster  = "${credentials_dev}"
            } else if (runPipeline == 'staging') {
                echo "Running Staging Pipeline with ${scm.GIT_BRANCH} branch"
                version             = "beta"
                helm_dir            = "incubator"
                serverUrl           = "${cluster_staging}"
                docker_url          = "${docker_staging}"
                artifact_url        = "${artifact_staging}"
                credentialsCluster  = "${credentials_staging}"
            } else if (runPipeline == 'production') {
                echo "Running Production Pipeline with tag ${scm.GIT_BRANCH}"
                version             = "release"
                helm_dir            = "stable"
                serverUrl           = "${cluster_prod}"
                docker_url          = "${docker_prod}"
                artifact_url        = "${artifact_prod}"
                credentialsCluster  = "${credentials_prod}"
            } else {
                echo "Running DEV Pipeline with ${scm.GIT_BRANCH} branch"
                version             = "debug"
                helm_dir            = "test"
                serverUrl           = "${cluster_dev}"
                docker_url          = "${docker_dev}"
                artifact_url        = "${artifact_dev}"
                credentialsCluster  = "${credentials_dev}"
            }
        }

        // ::DEV-STAGING
        if (version != "release") {
            stage ("Unit Test") {
                    echo "Unit test not available in this service"
                // dir ('api') {
                //     echo "Running Unit Test"
                //     sh "ls"
    
                //     goEnv()
    
                //     def sts = 1
                //     try {
                //         sts = sh (
                //             returnStatus: true, 
                //             script: '''
                //             export PATH=$PATH:$(go env GOPATH)/bin
                //             CGO_ENABLED=0 go test ./controller/... -cover -v -covermode=count -coverprofile=cover.out 2>&1 | go-junit-report -set-exit-code > ./report.xml
                //             echo $?
                //             '''
                //         )
                //         sh "go tool cover -func=cover.out"
                //         echo sts.toString()
                //     }
    
                //     finally{
                //         if (fileExists('./api/report.xml')) { 
                //             echo 'junit report'
                //             try{
                //                 junit '**/api/report.xml'
                //             } catch(e) {
                //             }
                //         }
                //         if(sts == 1){
                //             error('Unit testing Fail!!!!')
                //         }
                //     }
    
                //     def unitTestGetValue = sh(returnStdout: true, script: 'go tool cover -func=cover.out | grep total | sed "s/[[:blank:]]*$//;s/.*[[:blank:]]//"')
                //     unitTest_score = "Your score is ${unitTestGetValue}"
                //     echo "${unitTest_score}"
                //     if (unitTestGetValue >= unitTest_standard) {
                //         echo "Unit Test fulfill standar value with score ${unitTestGetValue}/${unitTest_standard}"
                //     } else {
                //         currentBuild.result = 'ABORTED'
                //         error("Sorry your unit test score not fulfill standard score ${unitTestGetValue}/${unitTest_standard}")
                //     }
                // }
            }
            
  stage("SonarQube Analysis"){
        echo "Running Code Review with SonarQube"
        //Set Credentials
		withSonarQubeEnv(credentialsId: 'sonarqube-token', installationName: 'sonarqube') {
            // SonarScanner
        sonarScanGo(project_name: "${version}-${fullname}", image_name: image_name, project_version: "${version}", sonarSrc: sonarSrc, sonarTest: sonarTest, sonarCoverage: sonarCoverage)
		}
                    //quality gate
                    timeout(time: 10, unit: 'MINUTES') {
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted due to quality gate failure: ${qg.status}"
                        }
                    }
                    
                }

            // ::NONPROD-PIPELINE
            if (version == 'alpha' || version == 'beta') {
                if (version == 'alpha') {
                    echo "Yes, it's dev branch. Continue to DEV Pipeline"
                } /*else if (version == 'beta'){
                stage ("Merge Pull Request") {
                    // GET PULL REQUEST ID
                    sh "curl -H \"PRIVATE-TOKEN: ${approval_token}\" \"https://gitlab.com/api/v4/projects/${projectID}/merge_requests\" --output resultMerge.json"
                    def jsonMerge = readJSON file: "resultMerge.json"                    
                    echo "Request from: ${jsonMerge[0].author.name}"

                    // STATUS VALIDATION
                    if (jsonMerge[0].state == "opened") {
                        // GET ALL COMMENTS ON PULL REQUEST
                        sh "curl -H \"PRIVATE-TOKEN: ${approval_token}\" \"https://gitlab.com/api/v4/projects/${projectID}/merge_requests/${jsonMerge[0].iid}/notes\" --output comment.json"
                        def commentJson = readJSON file: "comment.json"
                        def checking = false

                        // LOOP ALL COMMENT TO GET APPROVAL
                        commentJson.each { res ->

                            // CHECK IF CURRENT INDEX HAS SYSTEM FALSE 
                            if (!res.system && !checking) {
                                // IF COMMENT HAS VALUE: APPROVED AND AUTHOR IS VALID
                                if (res.body == "Approved" && approval.contains(res.author.username)) {
                                    addGitLabMRComment(comment: "Pull Request Approved by Jenkins")
                                    acceptGitLabMR(useMRDescription: true, removeSourceBranch: false)
                                } else {
                                    currentBuild.result = 'ABORTED'
                                    error("Sorry, your approval is not valid")
                                }
                                checking = true
                            }
                        }
                    } else {
                        error("Pull Request ${jsonMerge[0].title} ${jsonMerge[0].iid} is already ${jsonMerge[0].state}. Please Create a new Pull Request")
                    }
                    }
                }*/ else {
                    echo "Sorry, we will not running anyway"
                }

                stage ("Artifactory") {
                    parallel (
                        'Container': {
                            stage ("Build Container") {
                                dockerBuild(docker_url: docker_url, image_name: image_name, image_version: version)
                            }

                            stage ("Push Container") {
                                docker.withRegistry("https://${docker_url}", docker_credentials) {
                                    // ::LATEST
                                    dockerPush(docker_url: docker_url, image_name: image_name, image_version: version)
                                    // ::VERSION
                                    dockerPushTag(docker_url: docker_url, image_name: image_name, srcVersion: version, dstVersion: "${version}-${BUILD_NUMBER}")
                                    dockerRemove(docker_url: docker_url, image_name: image_name, image_version: "${version}-${BUILD_NUMBER}")
                                    if (version == 'alpha') {
                                        dockerRemove(docker_url: docker_url, image_name: image_name, image_version: version)
                                    }
                                    // ::REVERT
                                    if (version == 'beta') {
                                        dockerPushTag(docker_url: docker_url, image_name: image_name, srcVersion: version, dstVersion: "${version}-revert")
                                        dockerRemove(docker_url: docker_url, image_name: image_name, image_version: "${version}-revert")
                                        dockerRemove(docker_url: docker_url, image_name: image_name, image_version: version)
                                    }
                                }
                            }
                        },

                        'Chart': {
                            stage ("Packaging") {
                                dir('helm') {
                                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[credentialsId: 'ci-cd', url: helm_git]]])
                                    dir(helm_dir) {
                                        helmLint(service_name)
                                        helmDryRun(name: service_name, service_name: service_name)
                                        helmPackage(service_name)
                                    }
                                }
                            }

                            stage ("Push Chart") {
                                echo "Push Chart to Artifactory"
                                 dir('helm') {
                                    dir(helm_dir) {
                                    pushArtifact(name: "helm", service_name: service_name, artifact_url: artifact_url)
                                    }
                                }
                            }
                        },
                    )
                }
            } else {
                echo "Sorry we can't continue. Because it's not DEV or Staging cluster"
            }
        } else {
            // ::PRODUCTION
            stage ("Update Container") {
                sh "docker pull ${docker_staging}/${image_name}:beta"
                docker.withRegistry("https://${docker_url}", docker_credentials) {
                    sh "docker tag ${docker_staging}/${image_name}:beta ${docker_prod}/${image_name}:release"
                    dockerPush(docker_url: docker_url, image_name: image_name, image_version: version)
                    dockerPushTag(docker_url: docker_url, image_name: image_name, srcVersion: version, dstVersion: "${version}-revert")
                    dockerRemove(docker_url: docker_url, image_name: image_name, image_version: "${version}-revert")
                    dockerRemove(docker_url: docker_url, image_name: image_name, image_version: version)
                }
            }

            stage ("Packaging") {
                dir('helm') {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[credentialsId: 'ci-cd', url: helm_git]]])
                    dir(helm_dir) {
                        helmLint(service_name)
                        helmDryRun(name: service_name, service_name: service_name)
                        helmPackage(service_name)
                    }
                }
            }

            stage ("Push Chart") {
                echo "Push Chart to Artifactory"
                dir('helm') {
                    dir(helm_dir) {
                         pushArtifact(name: "helm", service_name: service_name, artifact_url: artifact_url)
                    }
               }
            }
        }

        // ::VERIFY-DEPLOYMENT
        if (version != "debug") {
            stage ("Deployment") {
                dir('helm') {
                    dir(helm_dir) {
                        withKubeConfig(credentialsId: credentialsCluster, serverUrl: serverUrl) {
                            try {
                                helmUpgrade(name: service_name, service_name: service_name)
                            } catch (e) {
                                helmInstall(name: service_name, service_name: service_name)
                            }
                        }
                    }
                }
            }
        } else {
            echo "Sorry, No Deployment"
        }

        // ::TESTING
        try {
            if (version == "beta") {
                stage ("Security Test") {
                    try {
                        echo "Running Security Testing by Tapera"
                        // CODE HERE
                    } catch (e) {
                        echo "${e}"
                    }
                }

                stage ("Performance Test") {
                    try {
                        echo "Running Performance Test"
                        //node ('k6') {
                        //    dir ('performance') {
                        //      checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[credentialsId: 'ci-cd', url: k6_repo]]])
                        //      sh "k6 run ${service_name}.js"
                        //    }
                        //}
                    } catch (e) {
                        echo "${e}"
                    }
                }

                stage ("Regression Test") {
                    try {
                        echo 'Running Regression Test'
                        node ('kre-centos') {
                            sleep 60
                            cleanWs deleteDirs: true
                            checkout([$class: 'GitSCM', userRemoteConfigs: [[credentialsId: 'ci-cd', url: "${katalonRepoUrl}"]], branches: [[name: "master"]]])
                            echo "workspace : ${workspace}"
                            regressionTest(workspace: "${workspace}", katalonProjectName: "${katalonProjectName}", katalonTestSuiteName: "${katalonTestSuiteName}")
                        }
                    } catch (e) {
                        echo "${e}"
                    }
                }
            } else if (version == "release") {
                try {
                    stage("Sanity Test") {
                        try {
                            echo "Running Sanity Test"
                        } catch (e) {
                            echo "${e}"
                        }
                    }
                } catch (e) {
                    stage ("Revert Production") {
                        docker.withRegistry("https://${docker_url}", docker_credentials) {
                            dockerPull(docker_url: docker_url, image_name: image_name, image_version: "${version}-revert")
                            dockerPushTag(docker_url: docker_url, image_name: image_name, srcVersion: "${version}-revert", dstVersion: version)
                            dockerRemove(docker_url: docker_url, image_name: image_name, image_version: version)
                        }
                    }

                    stage ("Deployment") {
                        dir('helm') {
                            dir(helm_dir) {
                                withKubeConfig(credentialsId: credentialsCluster, serverUrl: serverUrl) {
                                    helmRollBack(name: service_name, service_name: service_name)
                                }
                            }
                        }
                    }
                }
            } else {
                echo "No test except staging or production"
            }

        } catch (e) {
            // ::REVERT STAGING
            stage ("Revert Previous Merge") {
                echo "Get Merge ID & Push Again"
                // CODE HERE
            }

            stage ("Revert Container") {
                docker.withRegistry("https://${docker_url}", docker_credentials) {
                    dockerPull(docker_url: docker_url, image_name: image_name, image_version: "${version}-revert")
                    dockerPushTag(docker_url: docker_url, image_name: image_name, srcVersion: "${version}-revert", dstVersion: version)
                    dockerRemove(docker_url: docker_url, image_name: image_name, image_version: version)
                }
            }

            stage ("Deployment") {
                dir('helm') {
                    dir(helm_dir) {
                        withKubeConfig(credentialsId: credentialsCluster, serverUrl: serverUrl) {
                            helmRollBack(name: service_name, service_name: service_name)
                        }
                    }
                }
            }
        }

            stage ("Notifications") {
                echo "Job Success"
                //notifications(telegram_url: telegram_url, telegram_chatid: telegram_chatid, slack_channel: slack_channel, slack_colour: slack_colour, emails: emails,
                //job: env.JOB_NAME, job_numb: env.BUILD_NUMBER, job_url: env.BUILD_URL, job_status: job_success, unitTest_score: unitTest_score
                //)
            }
        } catch (e) {

        stage ("Error") {
            echo "Job Failed"
            //notifications(telegram_url: telegram_url, telegram_chatid: telegram_chatid, slack_channel: slack_channel, slack_colour: slack_colour, emails: emails,
            //job: env.JOB_NAME, job_numb: env.BUILD_NUMBER, job_url: env.BUILD_URL, job_status: job_error, unitTest_score: unitTest_score
            //)
        }
    }
}

def sonarScanGo(Map args) {
    sh "sonar-scanner -X \
    -Dsonar.projectName=${args.project_name} \
    -Dsonar.projectKey=${args.image_name} \
    -Dsonar.projectVersion=${args.version} \
    -Dsonar.sources=${args.sonarSrc} \
    -Dsonar.qualitygate.wait=true \
    -Dsonar.language=go \
    -Dsonar.dynamicAnalysis=reuseReports \
    -Dsonar.go.coverage.reportPaths=${args.sonarCoverage} \
    -Dsonar.exclusions=**/*.pb.go \
    -Dsonar.coverage.exclusions=**/*.pb.go \
    -Dsonar.tests=${args.sonarTest} \
    -Dsonar.test.inclusions=**/*_test.go \
    -Dsonar.test.exclusions=**/vendor/**,config/**,docs/**,resources/**,**/*.pb.go"
}

def goEnv() {
    sh (
        script: '''
        go version

        rm -rf report.xml
        rm -rf cover.out
        rm -rf cover

        export PATH=$PATH:$(go env GOPATH)/bin

        go mod tidy -v

        go get -u golang.org/x/lint/golint
        golint -set_exit_status ./v1/...
        
        go get -u github.com/jstemmer/go-junit-report
        go clean -testcache
        '''
    )
}

def regressionTest(Map args) {
    withCredentials([string(credentialsId: 'katalon-api-key', variable: 'secret')]) {
        sh "/katalon01/katalon-studio-engine/katalonc -noSplash -runMode=console \
        -projectPath='${args.workspace}/${args.katalonProjectName}' -retry=0 \
        -testSuitePath='Test Suites/${args.katalonTestSuiteName}' -executionProfile=default \
        -browserType='Chrome (headless)' -apiKey='${secret}'"
    }
}

def dockerBuild(Map args) {
    sh "docker build --network host -t ${args.docker_url}/${args.image_name}:${args.image_version} ."
}

def dockerPushTag(Map args) {
    sh "docker tag ${args.docker_url}/${args.image_name}:${args.srcVersion} ${args.docker_url}/${args.image_name}:${args.dstVersion}"
    sh "docker push ${args.docker_url}/${args.image_name}:${args.dstVersion}"
}

def dockerPush(Map args) {
    sh "docker push ${args.docker_url}/${args.image_name}:${args.image_version}"
}

def dockerPull(Map args) {
    sh "docker pull ${args.docker_url}/${args.image_name}:${args.image_version}"
}

def dockerRemove(Map args) {
    sh "docker rmi -f ${args.docker_url}/${args.image_name}:${args.image_version}"
}

def helmLint(String service_name) {
    echo "Running helm lint"
    sh "helm lint ${service_name}"
}

def helmDryRun(Map args) {
    echo "Running dry-run deployment"
    sh "helm install --dry-run --debug ${args.name} ${args.service_name} -n prt"
}

def helmPackage(String service_name) {
    echo "Running Helm Package"
    sh "helm package ${service_name}"
}

def helmUpgrade(Map args) {
    echo "Upgrade chart deployment"
    sh "helm upgrade ${args.name} ${args.service_name} -n prt --recreate-pods"
}

def helmInstall(Map args) {
    echo "Install chart deployment"
    sh "helm install ${args.name} ${args.service_name} -n prt"
}

def helmRollBack(Map args) {
    echo "Roolback chart deployment to Previous Version"
    sh "helm rollback ${args.name} 0 ${args.service_name} -n prt"
}

def pushArtifact(Map args) {
    echo "Upload to Artifactory Server"
    if (args.name == "helm") {
        withCredentials([usernamePassword(credentialsId: 'ci-cd', passwordVariable: 'password', usernameVariable: 'username')]) {
            sh "curl -v -n -u ${username}:${password} -T ${args.service_name}-*.tgz ${args.artifact_url}/"   
        }     
    } else {
        withCredentials([usernamePassword(credentialsId: 'ci-cd', passwordVariable: 'password', usernameVariable: 'username')]) {
            sh "curl -v -n -u ${username}:${password} -T ${args.name} ${args.artifact_url}/"
        }
    }
}

def notifications(Map args) {
    def message = "CICD Pipeline ${args.job} ${args.job_status} with build ${args.job_numb} \n\n More info at: ${args.job_url} \n\n Unit Test: ${args.unitTest_score} \n\n Total Time : ${currentBuild.durationString}"
    parallel(
        "Telegram": {
            sh "curl -s -X POST ${args.telegram_url} -d chat_id=${args.telegram_chatid} -d text='${message}'"
        },
        "Jira": {
            //jiraSend color: "${args.jira_url}", message: "${message}", channel: "${args.slack_channel}"
        }
    )
}
