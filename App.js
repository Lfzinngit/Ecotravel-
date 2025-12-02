import React, { useState } from 'react';


const ATTRACTIONS = [
{
  id: 1,
  name: 'Lençóis Maranhenses',
  description: 'Dunas e lagoas cristalinas — ecossistema único, turismo de baixo impacto e observação da natureza.',
  image: 'https://images.unsplash.com/photo-1548173239-5f4a5b2d5a6b?auto=format&fit=crop&w=1200&q=60',
  location: 'Maranhão',
  curiosities: 'As lagoas aparecem na temporada de chuvas (jun–set).' 
},
{
  id: 2,
  name: 'Chapada Diamantina',
  description: 'Parques, cachoeiras e trilhas — ideal para ecoturismo e conservação.',
  image: 'https://images.unsplash.com/photo-1518684079-1efa2f8be1d6?auto=format&fit=crop&w=1200&q=60',
  location: 'Bahia',
  curiosities: 'Região com diversas cavernas e pinturas rupestres.'
},
{
  id: 3,
  name: 'Ilha Grande (Aventureira)',
  description: 'Praias preservadas, trilhas e mergulho com rica biodiversidade marinha.',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
  location: 'Rio de Janeiro',
  curiosities: 'A ilha tem áreas de proteção ambiental e proíbe veículos motorizados.'
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [section, setSection] = useState('dicas'); // 'dicas' | 'localizacao' | 'curiosidades'
  const [showMore, setShowMore] = useState(false);


  const current = ATTRACTIONS[index];}


function nextAttraction() {
  setShowMore(false);
  setIndex((prev) => (prev + 1) % ATTRACTIONS.length);
}

function prevAttraction() {
  setShowMore(false);
  setIndex((prev) => (prev - 1 + ATTRACTIONS.length) % ATTRACTIONS.length);
}

function toggleSection(newSection) {
  newSection(newSection);
}

return (
<SafeAreaView style={(StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FFF4',
    },
    scroll: {
      padding: 16,
      alignItems: 'center'
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      marginTop: 8
    },
    subtitle: {
      fontSize: 14,
      color: '#333',
      marginBottom: 12,
      textAlign: 'center'
    },
    hero: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 12
    },
    controlsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 12
    },
    sectionToggle: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 8
    },
    sectionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: '#E6F4EA'
    },
    sectionText: {
      fontWeight: '600'
    },
    sectionBox: {
      width: '100%',
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      elevation: 1,
      marginBottom: 24
    },
    sectionContent: {
      fontSize: 14,
      color: '#222'
    }
  })).container}>
  <ScrollView contentContainerStyle={(StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F0FFF4',
      },
      scroll: {
        padding: 16,
        alignItems: 'center'
      },
      title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 8
      },
      subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        textAlign: 'center'
      },
      hero: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 12
      },
      controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 12
      },
      sectionToggle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 8
      },
      sectionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#E6F4EA'
      },
      sectionText: {
        fontWeight: '600'
      },
      sectionBox: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 1,
        marginBottom: 24
      },
      sectionContent: {
        fontSize: 14,
        color: '#222'
      }
    })).scroll}>
    <Text style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).title}>EcoTravel</Text>
    <Text style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).subtitle}>Guias rápidos de turismo sustentável pelo Brasil</Text>


    <Image source={{ uri: current.image }} style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).hero} resizeMode="cover" />


    <AttractionCard
      name={current.name}
      description={current.description}
      showMore={showMore}
/>

<View style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).controlsRow}>
  <Button title="Anterior" onPress={prevAttraction} />
  <Button title={showMore ? 'Mostrar menos' : 'Mostrar mais'} onPress={() => setShowMore((s) => !s)} />
  <Button title="Próximo" onPress={nextAttraction} />
</View>


<View style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).sectionToggle}>
  <TouchableOpacity style={(StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#F0FFF4',
          },
          scroll: {
            padding: 16,
            alignItems: 'center'
          },
          title: {
            fontSize: 28,
            fontWeight: '700',
            marginTop: 8
          },
          subtitle: {
            fontSize: 14,
            color: '#333',
            marginBottom: 12,
            textAlign: 'center'
          },
          hero: {
            width: '100%',
            height: 200,
            borderRadius: 12,
            marginBottom: 12
          },
          controlsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 12
          },
          sectionToggle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 8
          },
          sectionButton: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
            backgroundColor: '#E6F4EA'
          },
          sectionText: {
            fontWeight: '600'
          },
          sectionBox: {
            width: '100%',
            padding: 12,
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOpacity: 0.05,
            elevation: 1,
            marginBottom: 24
          },
          sectionContent: {
            fontSize: 14,
            color: '#222'
          }
        })).sectionButton} onPress={() => toggleSection('dicas')}>
    <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionText}>Dicas</Text>
  </TouchableOpacity>
  <TouchableOpacity style={(StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#F0FFF4',
          },
          scroll: {
            padding: 16,
            alignItems: 'center'
          },
          title: {
            fontSize: 28,
            fontWeight: '700',
            marginTop: 8
          },
          subtitle: {
            fontSize: 14,
            color: '#333',
            marginBottom: 12,
            textAlign: 'center'
          },
          hero: {
            width: '100%',
            height: 200,
            borderRadius: 12,
            marginBottom: 12
          },
          controlsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 12
          },
          sectionToggle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 8
          },
          sectionButton: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
            backgroundColor: '#E6F4EA'
          },
          sectionText: {
            fontWeight: '600'
          },
          sectionBox: {
            width: '100%',
            padding: 12,
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOpacity: 0.05,
            elevation: 1,
            marginBottom: 24
          },
          sectionContent: {
            fontSize: 14,
            color: '#222'
          }
        })).sectionButton} onPress={() => toggleSection('localizacao')}>
    <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionText}>Localização</Text>
  </TouchableOpacity>
  <TouchableOpacity style={(StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#F0FFF4',
          },
          scroll: {
            padding: 16,
            alignItems: 'center'
          },
          title: {
            fontSize: 28,
            fontWeight: '700',
            marginTop: 8
          },
          subtitle: {
            fontSize: 14,
            color: '#333',
            marginBottom: 12,
            textAlign: 'center'
          },
          hero: {
            width: '100%',
            height: 200,
            borderRadius: 12,
            marginBottom: 12
          },
          controlsRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 12
          },
          sectionToggle: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            marginBottom: 8
          },
          sectionButton: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
            backgroundColor: '#E6F4EA'
          },
          sectionText: {
            fontWeight: '600'
          },
          sectionBox: {
            width: '100%',
            padding: 12,
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOpacity: 0.05,
            elevation: 1,
            marginBottom: 24
          },
          sectionContent: {
            fontSize: 14,
            color: '#222'
          }
        })).sectionButton} onPress={() => toggleSection('curiosidades')}>
    <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionText}>Curiosidades</Text>
  </TouchableOpacity>
</View>

<View style={(StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#F0FFF4',
        },
        scroll: {
          padding: 16,
          alignItems: 'center'
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          marginTop: 8
        },
        subtitle: {
          fontSize: 14,
          color: '#333',
          marginBottom: 12,
          textAlign: 'center'
        },
        hero: {
          width: '100%',
          height: 200,
          borderRadius: 12,
          marginBottom: 12
        },
        controlsRow: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 12
        },
        sectionToggle: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginBottom: 8
        },
        sectionButton: {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
          backgroundColor: '#E6F4EA'
        },
        sectionText: {
          fontWeight: '600'
        },
        sectionBox: {
          width: '100%',
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          shadowColor: '#000',
          shadowOpacity: 0.05,
          elevation: 1,
          marginBottom: 24
        },
        sectionContent: {
          fontSize: 14,
          color: '#222'
        }
      })).sectionBox}>
  {section === 'dicas' && (
    <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionContent}>Dica: prefira guias locais, evite deixar lixo e respeite trilhas demarcadas.</Text>
  )}
{section === 'localizacao' && (
  <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionContent}>Local: {current.location}</Text>
  )}
{section === 'curiosidades' && (
  <Text style={(StyleSheet.create({
            container: {
              flex: 1,
              backgroundColor: '#F0FFF4',
            },
            scroll: {
              padding: 16,
              alignItems: 'center'
            },
            title: {
              fontSize: 28,
              fontWeight: '700',
              marginTop: 8
            },
            subtitle: {
              fontSize: 14,
              color: '#333',
              marginBottom: 12,
              textAlign: 'center'
            },
            hero: {
              width: '100%',
              height: 200,
              borderRadius: 12,
              marginBottom: 12
            },
            controlsRow: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 12
            },
            sectionToggle: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom: 8
            },
            sectionButton: {
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: '#E6F4EA'
            },
            sectionText: {
              fontWeight: '600'
            },
            sectionBox: {
              width: '100%',
              padding: 12,
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              elevation: 1,
              marginBottom: 24
            },
            sectionContent: {
              fontSize: 14,
              color: '#222'
            }
          })).sectionContent}>{current.curiosities}</Text>
  )}
</View>


  </ScrollView>
</SafeAreaView>
);


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AttractionCard({ name, description, showMore }) {
return (
  <View style={(StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FFF4',
    },
    scroll: {
      padding: 16,
      alignItems: 'center'
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      marginTop: 8
    },
    subtitle: {
      fontSize: 14,
      color: '#333',
      marginBottom: 12,
      textAlign: 'center'
    },
    hero: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 12
    },
    controlsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 12
    },
    sectionToggle: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 8
    },
    sectionButton: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: '#E6F4EA'
    },
    sectionText: {
      fontWeight: '600'
    },
    sectionBox: {
      width: '100%',
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      elevation: 1,
      marginBottom: 24
    },
    sectionContent: {
      fontSize: 14,
      color: '#222'
    }
  })).card}>
    <Text style={(StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F0FFF4',
      },
      scroll: {
        padding: 16,
        alignItems: 'center'
      },
      title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 8
      },
      subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        textAlign: 'center'
      },
      hero: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 12
      },
      controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 12
      },
      sectionToggle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 8
      },
      sectionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#E6F4EA'
      },
      sectionText: {
        fontWeight: '600'
      },
      sectionBox: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 1,
        marginBottom: 24
      },
      sectionContent: {
        fontSize: 14,
        color: '#222'
      }
    })).name}>{name}</Text>
    <Text style={(StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F0FFF4',
      },
      scroll: {
        padding: 16,
        alignItems: 'center'
      },
      title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 8
      },
      subtitle: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
        textAlign: 'center'
      },
      hero: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 12
      },
      controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 12
      },
      sectionToggle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 8
      },
      sectionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#E6F4EA'
      },
      sectionText: {
        fontWeight: '600'
      },
      sectionBox: {
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        elevation: 1,
        marginBottom: 24
      },
      sectionContent: {
        fontSize: 14,
        color: '#222'
      }
    })).desc}>{showMore ? description + '\n\n(Informações adicionais: ecoturismo responsável, horários e operadoras locais.)' : truncate(description, 120)}</Text>
    </View>
  );
}

function truncate(text, max) {
  if (!text) return '';
  return text.length > max ? text.slice(0, max - 3) + '...' : text;
}

